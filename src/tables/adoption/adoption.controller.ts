import { FastifyReply, FastifyRequest } from "fastify";
import { formatErrors } from "../../utils/errorFormatting";
import { adoptionService } from "./adoption.service";

export const adoptionHandlers = {
  create: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const adoptionNew = await adoptionService.create(request.body);
      return reply.code(201).send(adoptionNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getAll: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const adoptionList = await adoptionService.getAll();
      return reply.code(200).send(adoptionList);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const adoption = await adoptionService.getById(request.params);
      return reply.code(200).send(adoption);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  updateById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const adoptionNew = await adoptionService.updateById(request.params, request.body);
      return reply.code(200).send(adoptionNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  deleteById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const adoptionOld = await adoptionService.deleteById(request.params);
      return reply.code(200).send(adoptionOld);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },
};
