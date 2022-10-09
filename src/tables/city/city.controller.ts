import { FastifyReply, FastifyRequest } from "fastify";
import { formatErrors } from "../../utils/errorFormatting";
import { cityCreate, cityDeleteById, cityGetAll, cityGetById, cityUpdateById } from "./city.service";

export async function cityCreateHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const newCity = await cityCreate(request.body);
    return reply.code(201).send(newCity);
  } catch (error: any) {
    return formatErrors(request, reply, error);
  }
}

export async function cityGetAllHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const cities = await cityGetAll();
    return reply.code(200).send(cities);
  } catch (error: any) {
    return formatErrors(request, reply, error);
  }
}

export async function cityGetByIdHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const city = await cityGetById(request.params);
    return reply.code(200).send(city);
  } catch (error: any) {
    return formatErrors(request, reply, error);
  }
}

export async function cityUpdateByIdHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const updatedCity = await cityUpdateById(request.params, request.body);
    return reply.code(200).send(updatedCity);
  } catch (error: any) {
    return formatErrors(request, reply, error);
  }
}

export async function cityDeleteByIdHandler(request: FastifyRequest, reply: FastifyReply) {
  try {
    const deletedCity = await cityDeleteById(request.params);
    return reply.code(200).send(deletedCity);
  } catch (error: any) {
    return formatErrors(request, reply, error);
  }
}
