import { FastifyReply, FastifyRequest } from "fastify";
import { formatErrors } from "../../utils/errorFormatting";
import { cityService } from "./city.service";

export const cityHandlers = {
  create: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const CityNew = await cityService.create(request.body);
      return reply.code(201).send(CityNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getAll: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const cityList = await cityService.getAll();
      return reply.code(200).send(cityList);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const city = await cityService.getById(request.params);
      return reply.code(200).send(city);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  updateById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const cityNew = await cityService.updateById(request.params, request.body);
      return reply.code(200).send(cityNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  deleteById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const cityOld = await cityService.deleteById(request.params);
      return reply.code(200).send(cityOld);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },
};
