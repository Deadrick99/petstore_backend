import { FastifyReply, FastifyRequest } from "fastify";
import { formatErrors } from "../../utils/errorFormatting";
import { breedService } from "./breed.service";

export const breedHandlers = {
  create: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const breedNew = await breedService.create(request.body);
      return reply.code(201).send(breedNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getAll: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const breedList = await breedService.getAll();
      return reply.code(200).send(breedList);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const breed = await breedService.getById(request.params);
      return reply.code(200).send(breed);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  updateById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const breedNew = await breedService.updateById(request.params, request.body);
      return reply.code(200).send(breedNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  deleteById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const breedOld = await breedService.deleteById(request.params);
      return reply.code(200).send(breedOld);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },
};
