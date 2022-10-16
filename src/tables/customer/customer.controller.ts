import { FastifyReply, FastifyRequest } from "fastify";
import { formatErrors } from "../../utils/errorFormatting";
import { customerSingleInputModel } from "./customer.schema";
import {
  customerCreate,
  customerDeleteById,
  customerGetAll,
  customerGetById,
  customerUpdateById,
} from "./customer.service";

export async function customerCreateHandler(
  request: FastifyRequest<{
    Body: customerSingleInputModel;
  }>,
  reply: FastifyReply
) {
  try {
    const newCustomer = await customerCreate(request.body);
    return reply.code(201).send(newCustomer);
  } catch (error: any) {
    return formatErrors(request, reply, error);
  }
}

export async function customerGetAllHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const customers = await customerGetAll();
    return reply.code(200).send(customers);
  } catch (error: any) {
    return formatErrors(request, reply, error);
  }
}

export async function customerGetByIdHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const customer = await customerGetById(request.params);
    return reply.code(200).send(customer);
  } catch (error: any) {
    return formatErrors(request, reply, error);
  }
}

export async function customerUpdateByIdHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const updatedCustomer = await customerUpdateById(request.params, request.body);
    return reply.code(200).send(updatedCustomer);
  } catch (error: any) {
    return formatErrors(request, reply, error);
  }
}

export async function customerDeleteByIdHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const deletedCustomer = await customerDeleteById(request.params);
    return reply.code(200).send(deletedCustomer);
  } catch (error: any) {
    return formatErrors(request, reply, error);
  }
}
