import { FastifyReply } from "fastify";
import { FastifyRequest } from "fastify";
import { ZodError } from "zod";

export function formatErrors(error: any, request: FastifyRequest, reply: FastifyReply) {
  console.log(error);

  if (error instanceof ZodError) {
    return reply.code(500).send(error.flatten());
  }

  if (error.meta && error.meta.cause) {
    return reply.code(500).send({ error: error.meta.cause });
  }

  if (error.message) {
    return reply.code(500).send({ error: error.message });
  }

  return reply.code(500).send(error || "Unknown error occurred");
}
