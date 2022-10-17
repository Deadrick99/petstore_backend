import { FastifyInstance } from "fastify";
import { cityHandlers } from "./city.controller";
import { citySwaggerRouteInfos } from "./city.swagger";

async function cityRoutes(server: FastifyInstance) {
  server.get("/", citySwaggerRouteInfos.getAll, cityHandlers.getAll);
  server.get("/:Id", citySwaggerRouteInfos.getById, cityHandlers.getById);
  server.post("/", citySwaggerRouteInfos.create, cityHandlers.create);
  server.patch("/:Id", citySwaggerRouteInfos.UpdateById, cityHandlers.updateById);
  server.delete("/:Id", citySwaggerRouteInfos.DeleteById, cityHandlers.deleteById);
}

export default cityRoutes;
