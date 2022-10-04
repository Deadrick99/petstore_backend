import * as dotenv from "dotenv";

import Fastify from "fastify";
import animal_routes from "./tables/animal/animal.route";

const server = Fastify();

main();

async function main() {
  try {
    await setup_server();
  } catch (e: any) {
    console.error(e);
  }
}

async function setup_server() {
  dotenv.config();

  await add_routes_to_server();

  const PORT = parseInt(process.env.PORT as string);

  await server.listen({
    port: PORT,
    host: "0.0.0.0",
  });

  console.log(`Server listening on port ${PORT} ...`);
}

async function add_routes_to_server() {
  type ServerStatus = "running" | "stopped";

  // Health check endpoint
  server.get("/api/", () => {
    const curr_status: ServerStatus = "running";
    return { status: curr_status };
  });

  server.register(animal_routes, { prefix: "api/animals" });
}
