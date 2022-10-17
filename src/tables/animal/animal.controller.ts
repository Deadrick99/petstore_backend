import { FastifyReply, FastifyRequest } from "fastify";
import { formatErrors } from "../../utils/errorFormatting";
import { animalService } from "./animal.service";

export const animalHandlers = {
  create: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const animalNew = await animalService.create(request.body);
      return reply.code(201).send(animalNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getAll: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const animalList = await animalService.getAll();
      return reply.code(200).send(animalList);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const animal = await animalService.getById(request.params);
      return reply.code(200).send(animal);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  updateById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const animalNew = await animalService.updateById(request.params, request.body);
      return reply.code(200).send(animalNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  deleteById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const animalOld = await animalService.deleteById(request.params);
      return reply.code(200).send(animalOld);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },
};
