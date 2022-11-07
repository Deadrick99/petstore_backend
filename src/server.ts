import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swagger_ui from "@fastify/swagger-ui";
import * as dotenv from "dotenv";
import { swagger_info, swagger_ui_info } from "./utils/swagger";

import customerRoutes from "./tables/customer/customer.route";
import cityRoutes from "./tables/city/city.route";
import authSchema from "./utils/schemas";
import { formatErrors } from "./utils/errorFormatting";
import animalRoutes from "./tables/animal/animal.route";
import categoryRoutes from "./tables/category/category.route";
import merchandiseRoutes from "./tables/merchandise/merchandise.route";
import breedRoutes from "./tables/breed/breed.route";
import { setPrismaSrc } from "./utils/prisma";

export function createFastifyServer(mode: "production" | "testing" = "production") {
  setPrismaSrc(mode);

const server: FastifyInstance = fastify();

server.addContentTypeParser('text/json', { parseAs: 'string' }, server.getDefaultJsonParser('ignore', 'ignore'));

  setupServer(server);

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

function setupServer(server: FastifyInstance) {
  setupCors(server);
  setupSwagger(server);
  setServerRoutes(server);
}

function setupCors(server: FastifyInstance) {
  server.register(cors, {
    origin: ["localhost"],
  });
}

function setupSwagger(server: FastifyInstance) {
  server.register(swagger, swagger_info);
  server.register(swagger_ui, swagger_ui_info);
}

function setServerRoutes(server: FastifyInstance) {
  // Health check endpoint
  server.get("/api", () => {
    return { status: "ok", running: true };
  });

  // CRUD endpoints
  server.register(animalRoutes, { prefix: "/api/animals" });
  server.register(breedRoutes, { prefix: "/api/breeds" });
  server.register(categoryRoutes, { prefix: "/api/categories" });
  server.register(cityRoutes, { prefix: "/api/cities" });
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


async function setLoginRoutes() {
  server.post('/api/login', async (req: FastifyRequest, reply: FastifyReply) => {
    
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

    let account = await storage.getItem(data.email)
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
    let data = { email: '', password: '' };

    try {
      data = authSchema.parse(req.body);
    } catch(error) {
      return formatErrors(req, reply, error);
    }

    let accounts = storage.keys();

    if (accounts.includes(data.email)) {
      reply.code(400).send('An account associated with this email already exists.');
      return;
    }

    let newAccount = {
      'password': data.password,
      'token': uuidv4()
    }
    storage.setItem(data.email, newAccount);
    reply.code(200).send('Successfully created the account.');
  });
}
