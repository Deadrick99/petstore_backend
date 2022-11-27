import { FastifyInstance } from "fastify";
import { adoptionHandlers } from "./adoption.controller";
import { adoptionSwaggerRouteInfos } from "./adoption.swagger";

async function adoptionRoutes(server: FastifyInstance) {
  server.get("/", adoptionSwaggerRouteInfos.getAll, adoptionHandlers.getAll);
  server.get("/:Id", adoptionSwaggerRouteInfos.getById, adoptionHandlers.getById);
  server.post("/", adoptionSwaggerRouteInfos.create, adoptionHandlers.create);
  server.patch("/:Id", adoptionSwaggerRouteInfos.UpdateById, adoptionHandlers.updateById);
  server.delete("/:Id", adoptionSwaggerRouteInfos.DeleteById, adoptionHandlers.deleteById);
}

export default adoptionRoutes;
