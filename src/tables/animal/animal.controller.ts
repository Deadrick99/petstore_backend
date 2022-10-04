import { FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";
import { animal_create_inputSchema, animal_create_inputModel } from "./animal.schema";
import { animal_create } from "./animal.service";

export async function animal_create_handler(
  request: FastifyRequest<{ Body: animal_create_inputModel }>,
  reply: FastifyReply
) {
  try {
    const body = request.body;

    const animal_input = animal_create_inputSchema.parse(body);

    const new_animal = await animal_create(animal_input);

    return reply.code(201).send(new_animal);
  } catch (e: any) {
    if (e instanceof ZodError) {
      return reply.code(400).send(e.flatten());
    }

    return reply.code(500).send(e);
  }
}
