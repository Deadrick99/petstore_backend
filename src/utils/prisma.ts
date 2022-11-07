import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  errorFormat: "minimal",
});

export default prisma;

export function setPrismaSrc(src: "production" | "testing") {
  switch (src) {
    case "production":
      process.env.DATABASE_URL = "file:./petstore_db.sqlite3";
      break;
    case "testing":
      process.env.DATABASE_URL = "file:./testing_db.sqlite3";
      break;
  }
}
