import { FastifyReply, FastifyRequest } from "fastify";
import { formatErrors } from "../../utils/errorFormatting";
import { categoryService } from "./category.service";

export const categoryHandlers = {
  create: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const categoryNew = await categoryService.create(request.body);
      return reply.code(201).send(categoryNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getAll: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const categoryList = await categoryService.getAll();
      return reply.code(200).send(categoryList);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const category = await categoryService.getById(request.params);
      return reply.code(200).send(category);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  updateById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const categoryNew = await categoryService.updateById(request.params, request.body);
      return reply.code(200).send(categoryNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  deleteById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const categoryOld = await categoryService.deleteById(request.params);
      return reply.code(200).send(categoryOld);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },
};
