import { FastifyInstance } from "fastify";
import { customerHandlers } from "./customer.controller";
import { customerSwaggerRouteInfos } from "./customer.swagger";

async function customerRoutes(server: FastifyInstance) {
  server.get("/", customerSwaggerRouteInfos.getAll, customerHandlers.getAll);
  server.get("/:Id", customerSwaggerRouteInfos.getById, customerHandlers.getById);
  server.post("/", customerSwaggerRouteInfos.create, customerHandlers.create);
  server.patch("/:Id", customerSwaggerRouteInfos.UpdateById, customerHandlers.updateById);
  server.delete("/:Id", customerSwaggerRouteInfos.DeleteById, customerHandlers.deleteById);
}

export default customerRoutes;
