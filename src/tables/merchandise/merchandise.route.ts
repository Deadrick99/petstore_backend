import { FastifyInstance } from "fastify";
import { merchandiseHandlers } from "./merchandise.controller";
import { merchandiseSwaggerRouteInfos } from "./merchandise.swagger";

async function merchandiseRoutes(server: FastifyInstance) {
  server.get("/", merchandiseSwaggerRouteInfos.getAll, merchandiseHandlers.getAll);
  server.get("/:Id", merchandiseSwaggerRouteInfos.getById, merchandiseHandlers.getById);
  server.post("/", merchandiseSwaggerRouteInfos.create, merchandiseHandlers.create);
  server.patch("/:Id", merchandiseSwaggerRouteInfos.UpdateById, merchandiseHandlers.updateById);
  server.delete("/:Id", merchandiseSwaggerRouteInfos.DeleteById, merchandiseHandlers.deleteById);
}

export default merchandiseRoutes;
