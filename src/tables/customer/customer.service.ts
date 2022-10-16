import prisma from "../../utils/prisma";
import {
  customerIdInputSchema,
  customerManyOutputSchema,
  customerSingleInputSchema,
  customerSingleOutputSchema,
  customerSinglePartialInputSchema,
} from "./customer.schema";

export async function customerCreate(customerDataInput: any) {
  const customerData = customerSingleInputSchema.parse(customerDataInput);

  const customer = await prisma.customer.create({
    data: customerData,
  });

  return customerSingleOutputSchema.parse(customer);
}

export async function customerGetAll() {
  const customerList = await prisma.customer.findMany();
  return customerManyOutputSchema.parse(customerList);
}

export async function customerGetById(IdInput: any) {
  const idInput = customerIdInputSchema.parse(IdInput);

  const customer = await prisma.customer.findUniqueOrThrow({
    where: {
      Id: idInput.Id,
    },
  });

  console.log(customer);

  return customerSingleOutputSchema.parse(customer);
}

export async function customerUpdateById(IdInput: any, customerDataInput: any) {
  const idInput = customerIdInputSchema.parse(IdInput);
  const customerData = customerSinglePartialInputSchema.parse(customerDataInput);

  const updatedCustomer = await prisma.customer.update({
    where: {
      Id: idInput.Id,
    },
    data: customerData,
  });

  return customerSingleOutputSchema.parse(updatedCustomer);
}

export async function customerDeleteById(IdInput: any) {
  const idInput = customerIdInputSchema.parse(IdInput);

  const customer = await prisma.customer.delete({
    where: {
      Id: idInput.Id,
    },
  });

  return customerSingleOutputSchema.parse(customer);
}
