import fastify, { FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import * as dotenv from "dotenv";

import customerRoutes from "./tables/customer/customer.route";
import cityRoutes from "./tables/city/city.route";

const server: FastifyInstance = fastify();

main();

async function main() {
  try {
    setupServer();
    setServerRoutes();
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
