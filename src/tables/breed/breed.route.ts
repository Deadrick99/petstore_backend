import { FastifyInstance } from "fastify";
import { breedHandlers } from "./breed.controller";
import { breedSwaggerRouteInfos } from "./breed.swagger";

async function breedRoutes(server: FastifyInstance) {
  server.get("/", breedSwaggerRouteInfos.getAll, breedHandlers.getAll);
  server.get("/:Id", breedSwaggerRouteInfos.getById, breedHandlers.getById);
  server.post("/", breedSwaggerRouteInfos.create, breedHandlers.create);
  server.patch("/:Id", breedSwaggerRouteInfos.UpdateById, breedHandlers.updateById);
  server.delete("/:Id", breedSwaggerRouteInfos.DeleteById, breedHandlers.deleteById);
}

export default breedRoutes;
