import { FastifyInstance } from "fastify";
import {
  customerCreateHandler,
  customerDeleteByIdHandler,
  customerGetAllHandler,
  customerGetByIdHandler,
  customerUpdateByIdHandler,
} from "./customer.controller";
import { $ref } from "./customer.schema";

async function customerRoutes(server: FastifyInstance) {
  server.get(
    "/",
    {
      schema: {
        response: {
          200: $ref("customerManyOutputSchema"),
        },
      },
    },
    customerGetAllHandler
  );

  server.get(
    "/:Id",
    {
      schema: {
        params: $ref("customerIdInputSchema"),
        response: {
          200: $ref("customerSingleOutputSchema"),
        },
      },
    },
    customerGetByIdHandler
  );

  server.post(
    "/",
    {
      schema: {
        body: $ref("customerSingleInputSchema"),
        response: {
          201: $ref("customerSingleOutputSchema"),
        },
      },
    },
    customerCreateHandler
  );

  server.patch(
    "/:Id",
    {
      schema: {
        params: $ref("customerIdInputSchema"),
        body: $ref("customerSinglePartialInputSchema"),
        response: {
          200: $ref("customerSingleOutputSchema"),
        },
      },
    },
    customerUpdateByIdHandler
  );

  server.delete(
    "/:Id",
    {
      schema: {
        params: $ref("customerIdInputSchema"),
        response: {
          200: $ref("customerSingleOutputSchema"),
        },
      },
    },
    customerDeleteByIdHandler
  );
}

export default customerRoutes;
