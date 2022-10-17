import { FastifyReply, FastifyRequest } from "fastify";
import { formatErrors } from "../../utils/errorFormatting";
import { customerService } from "./customer.service";

export const customerHandlers = {
  create: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const customerNew = await customerService.create(request.body);
      return reply.code(201).send(customerNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getAll: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const customerList = await customerService.getAll();
      return reply.code(200).send(customerList);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const customer = await customerService.getById(request.params);
      return reply.code(200).send(customer);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  updateById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const customerNew = await customerService.updateById(request.params, request.body);
      return reply.code(200).send(customerNew);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  deleteById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const customerOld = await customerService.deleteById(request.params);
      return reply.code(200).send(customerOld);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },
};
