import { FastifyInstance } from "fastify";
import { createFastifyServer } from "../server";
import prisma from "../utils/prisma";

let server: FastifyInstance;

export function buildTestServer() {
  server = createFastifyServer("testing");

  beforeAll(async () => {
    await server.ready();
  });

  afterAll(async () => {
    await server.close();
  });

  return server;
}
