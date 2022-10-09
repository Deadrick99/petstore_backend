import { FastifyInstance } from "fastify";
import {
  cityCreateHandler,
  cityDeleteByIdHandler,
  cityGetAllHandler,
  cityGetByIdHandler,
  cityUpdateByIdHandler,
} from "./city.controller";

async function cityRoutes(server: FastifyInstance) {
  server.get("/", cityGetAllHandler);
  server.get("/:Id", cityGetByIdHandler);
  server.post("/", cityCreateHandler);
  server.patch("/:Id", cityUpdateByIdHandler);
  server.delete("/:Id", cityDeleteByIdHandler);
}

export default cityRoutes;
