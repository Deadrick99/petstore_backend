import { FastifyReply, FastifyRequest } from "fastify";
import { formatErrors } from "../../utils/errorFormatting";
import { merchandiseService } from "./merchandise.service";

export const merchandiseHandlers = {
  create: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const merchandiseNew = await merchandiseService.create(request.body);
      return reply.code(201).send(merchandiseNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getAll: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const merchandiseList = await merchandiseService.getAll();
      return reply.code(200).send(merchandiseList);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const merchandise = await merchandiseService.getById(request.params);
      return reply.code(200).send(merchandise);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  updateById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const merchandiseNew = await merchandiseService.updateById(request.params, request.body);
      return reply.code(200).send(merchandiseNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  deleteById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const merchandiseOld = await merchandiseService.deleteById(request.params);
      return reply.code(200).send(merchandiseOld);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },
};
