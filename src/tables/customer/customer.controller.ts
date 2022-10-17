import { FastifyReply, FastifyRequest } from "fastify";
import { formatErrors } from "../../utils/errorFormatting";
import { customerService } from "./customer.service";

export const customerHandlers = {
  create: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const newCustomer = await customerService.create(request.body);
      return reply.code(201).send(newCustomer);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  getAll: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const customers = await customerService.getAll();
      return reply.code(200).send(customers);
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
      const updatedCustomer = await customerService.updateById(request.params, request.body);
      return reply.code(200).send(updatedCustomer);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },

  deleteById: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const deletedCustomer = await customerService.deleteById(request.params);
      return reply.code(200).send(deletedCustomer);
    } catch (error: any) {
      return formatErrors(error, request, reply);
    }
  },
};
