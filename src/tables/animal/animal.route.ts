import { FastifyInstance } from "fastify";
import { animalHandlers } from "./animal.controller";
import { animalSwaggerRouteInfos } from "./animal.swagger";

async function animalRoutes(server: FastifyInstance) {
  server.get("/", animalSwaggerRouteInfos.getAll, animalHandlers.getAll);
  server.get("/:Id", animalSwaggerRouteInfos.getById, animalHandlers.getById);
  server.post("/", animalSwaggerRouteInfos.create, animalHandlers.create);
  server.patch("/:Id", animalSwaggerRouteInfos.UpdateById, animalHandlers.updateById);
  server.delete("/:Id", animalSwaggerRouteInfos.DeleteById, animalHandlers.deleteById);
}

export default animalRoutes;
