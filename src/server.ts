import fastify, { FastifyInstance, FastifyServerOptions } from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swagger_ui from "@fastify/swagger-ui";

import { swagger_info, swagger_ui_info } from "./utils/swagger";

import customerRoutes from "./tables/customer/customer.route";
import cityRoutes from "./tables/city/city.route";
import animalRoutes from "./tables/animal/animal.route";
import categoryRoutes from "./tables/category/category.route";
import merchandiseRoutes from "./tables/merchandise/merchandise.route";

export function createFastifyServer(opts: FastifyServerOptions = {}) {
  const server: FastifyInstance = fastify(opts);

  setupServer(server);

  return server;
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
  server.register(customerRoutes, { prefix: "/api/customers" });
  server.register(categoryRoutes, { prefix: "/api/categories" });
  server.register(cityRoutes, { prefix: "/api/cities" });
  server.register(animalRoutes, { prefix: "/api/animals" });
  server.register(merchandiseRoutes, { prefix: "/api/merchandise" });
}
