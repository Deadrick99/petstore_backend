import prisma from "../../utils/prisma";
import { customerSchemas } from "./customer.schema";

export const customerService = {
  create: async (customerDataInput: any) => {
    const customerData = customerSchemas.SingleInput.parse(customerDataInput);

    const customer = await prisma.customer.create({
      data: customerData,
    });

    return customerSchemas.SingleOutput.parse(customer);
  },

  getAll: async () => {
    const customerList = await prisma.customer.findMany();
    return customerSchemas.ManyOutput.parse(customerList);
  },

  getById: async (IdInput: any) => {
    const idInput = customerSchemas.IdInput.parse(IdInput);

    const customer = await prisma.customer.findUniqueOrThrow({
      where: {
        Id: idInput.Id,
      },
    });

    console.log(customer);

    return customerSchemas.SingleOutput.parse(customer);
  },

  updateById: async (IdInput: any, customerDataInput: any) => {
    const idInput = customerSchemas.IdInput.parse(IdInput);
    const customerData = customerSchemas.SinglePartialInput.parse(customerDataInput);

    const customerNew = await prisma.customer.update({
      where: {
        Id: idInput.Id,
      },
      data: customerData,
    });

    return customerSchemas.SingleOutput.parse(customerNew);
  },

  deleteById: async (IdInput: any) => {
    const idInput = customerSchemas.IdInput.parse(IdInput);

    const customer = await prisma.customer.delete({
      where: {
        Id: idInput.Id,
      },
    });

    return customerSchemas.SingleOutput.parse(customer);
  },
};
