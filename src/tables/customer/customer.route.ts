import { FastifyInstance } from "fastify";
import {
  customerCreateHandler,
  customerDeleteByIdHandler,
  customerGetAllHandler,
  customerGetByIdHandler,
  customerUpdateByIdHandler,
} from "./customer.controller";

async function customerRoutes(server: FastifyInstance) {
  server.get("/", customerGetAllHandler);
  server.get("/:Id", customerGetByIdHandler);
  server.post("/", customerCreateHandler);
  server.patch("/:Id", customerUpdateByIdHandler);
  server.delete("/:Id", customerDeleteByIdHandler);
}

export default customerRoutes;
