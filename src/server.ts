import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import * as dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

const storage = require('node-persist');

import customerRoutes from "./tables/customer/customer.route";
import cityRoutes from "./tables/city/city.route";
import authSchema from "./utils/schemas";
import { formatErrors } from "./utils/errorFormatting";

const server: FastifyInstance = fastify();

server.addContentTypeParser('text/json', { parseAs: 'string' }, server.getDefaultJsonParser('ignore', 'ignore'));

main();

async function main() {
  try {
    setupServer();
    setupStorage();
    setLoginRoutes();
    setServerRoutes();
    setSignupRoutes();
    serverRun();
  } catch (e: any) {
    console.error(e.message || e || "Unknown Error");
    process.exit(1);
  }
}

function setupServer() {
  setupCors();
}

async function setupCors() {
  await server.register(cors, {
    origin: ["localhost"],
  });
}

function extractServerOptions(): { port: number; host: string } {
  dotenv.config();

  if (!process.env.PORT) {
    throw "Unable to extract PORT from .env file. Does file exist? Is PORT defined? Perhaps dotenv package failed?";
  }

  const PORT = parseInt(process.env.PORT);

  return {
    port: PORT,
    host: "0.0.0.0",
  };
}

function setServerRoutes() {
  // Health check endpoint
  server.get("/api", () => {
    return { status: "ok", running: true };
  });

  // CRUD endpoints
  server.register(customerRoutes, { prefix: "/api/customers" });
  server.register(cityRoutes, { prefix: "/api/cities" });
}

async function serverRun() {
  const server_options = extractServerOptions();
  await server.listen(server_options);

  console.log(`Server listening on port ${server_options.port} ...`);
}

/**
 * Login and Signup Functions
 */
function setupStorage() {  
  storage.init({ dir: './.storage'});
}

function setLoginRoutes() {
  server.post('/api/login', (req: FastifyRequest, reply: FastifyReply) => {
    
    let data = { email: '', password: '' };

    try {
      data = authSchema.parse(req.body);
    } catch(error) {
      return formatErrors(req, reply, error);
    }

    let accounts = storage.keys();

    if (!accounts.includes(data.email)) {
      reply.code(400).send('An account associated with this email was not found.');
      return;
    }

    let account = storage.getItem(data.email)
    let correctPassword = account.password;

    if (data.password != correctPassword) {
      reply.code(400).send('This password is incorrect.');
      return;
    }

    reply.code(200).send(account.token);
  });
}

function setSignupRoutes() {
  server.post('/api/signup', (req: FastifyRequest, reply: FastifyReply) => {
    try {
      authSchema.parse(req.body);
    } catch(error) {
      return formatErrors(req, reply, error);
    }

  });
}
