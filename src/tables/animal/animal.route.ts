import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { animal_create_handler } from "./animal.controller";

async function animal_routes(server: FastifyInstance) {
  server.post("/", animal_create_handler);
}

export default animal_routes;
