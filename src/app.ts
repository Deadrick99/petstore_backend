import * as dotenv from "dotenv";
import { createFastifyServer } from "./server";

main();

export async function main() {
  try {
    const server = createFastifyServer();

    const server_options = extractServerOptions();
    await server.listen(server_options);

    console.log(`Server listening on port ${server_options.port} ...`);
  } catch (e: any) {
    console.error(e.message || e || "Unknown Error");
    process.exit(1);
  }
}

function extractServerOptions(): { port: number; host: string } {
  dotenv.config();

  if (!process.env.PORT) {
    throw "Unable to extract PORT from .env file. Does file exist? Is PORT defined? Perhaps dotenv package failed?";
  }

  const PORT = parseInt(process.env.PORT);

  return {
    port: PORT,
    host: "0.0.0.0",
  };
}
