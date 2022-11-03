import { FastifyInstance } from "fastify";
import { categoryHandlers } from "./category.controller";
import { categorySwaggerRouteInfos } from "./category.swagger";

async function categoryRoutes(server: FastifyInstance) {
  server.get("/", categorySwaggerRouteInfos.getAll, categoryHandlers.getAll);
  server.get("/:Id", categorySwaggerRouteInfos.getById, categoryHandlers.getById);
  server.post("/", categorySwaggerRouteInfos.create, categoryHandlers.create);
  server.patch("/:Id", categorySwaggerRouteInfos.UpdateById, categoryHandlers.updateById);
  server.delete("/:Id", categorySwaggerRouteInfos.DeleteById, categoryHandlers.deleteById);
}

export default categoryRoutes;
