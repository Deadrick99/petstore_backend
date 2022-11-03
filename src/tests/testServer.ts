import { FastifyInstance } from "fastify";
import { createFastifyServer } from "../server";

let server: FastifyInstance;

export function buildTestServer() {
  server = createFastifyServer();

  beforeAll(async () => {
    await server.ready();
  });

  afterAll(async () => {
    server.close();
  });

  return server;
}
