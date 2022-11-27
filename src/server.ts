import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import swagger from "@fastify/swagger";
import swagger_ui from "@fastify/swagger-ui";
import dotenv from "dotenv";
import { swagger_info, swagger_ui_info } from "./utils/swagger";
import storage from "node-persist";

import customerRoutes from "./tables/customer/customer.route";
import cityRoutes from "./tables/city/city.route";
import authSchema from "./utils/schemas";
import { formatErrors } from "./utils/errorFormatting";
import animalRoutes from "./tables/animal/animal.route";
import categoryRoutes from "./tables/category/category.route";
import merchandiseRoutes from "./tables/merchandise/merchandise.route";
import breedRoutes from "./tables/breed/breed.route";
import { setPrismaSrc } from "./utils/prisma";

export function createFastifyServer(mode: "production" | "testing" = "production"): FastifyInstance {
  setPrismaSrc(mode);

  const server: FastifyInstance = fastify();

  server.addContentTypeParser("text/json", { parseAs: "string" }, server.getDefaultJsonParser("ignore", "ignore"));

  setupServer(server);

  return server;
}

function setupServer(server: FastifyInstance) {
  setupCors(server);
  setupSwagger(server);
  setServerRoutes(server);
  setSignupRoutes(server);
  setLoginRoutes(server);
  setupStorage();
}

function setupCors(server: FastifyInstance) {
  server.register(cors, {
    origin: ["*"],
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
  server.register(merchandiseRoutes, { prefix: "/api/merchandise" });
}

/**
 * Login and Signup Functions
 */


function setupStorage() {
  storage.init({ dir: "./.storage" });
}

async function setLoginRoutes(server: FastifyInstance) {
  server.post("/api/login", async (req: FastifyRequest, reply: FastifyReply) => {
    let data = { email: "", password: "" };

    try {
      data = authSchema.parse(req.body);
    } catch (error) {
      return formatErrors(error, req, reply);
    }

    let accounts = await storage.keys();

    if (!accounts.includes(data.email)) {
      reply.code(400).send("An account associated with this email was not found.");
      return;
    }

    let account = await storage.getItem(data.email);
    let correctPassword = account.password;

    if (data.password != correctPassword) {
      reply.code(400).send("This password is incorrect.");
      return;
    }

    reply.code(200).send(account.token);
  });
}

function setSignupRoutes(server: FastifyInstance) {
  server.post("/api/signup", async (req: FastifyRequest, reply: FastifyReply) => {
    let data = { email: "", password: "" };

    try {
      data = authSchema.parse(req.body);
    } catch (error) {
      return formatErrors(error, req, reply);
    }

    let accounts = await storage.keys();

    if (accounts.includes(data.email)) {
      reply.code(400).send("An account associated with this email already exists.");
      return;
    }

    let newAccount = {
      password: data.password,
      token: uidv4(),
    };
    storage.setItem(data.email, newAccount);
    reply.code(200).send("Successfully created the account.");
  });
}

