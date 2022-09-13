import { z } from "zod";
import { db } from "../utils/db.server";
import { customerCreateInputObjectSchema } from "../zod/schemas/objects/customerCreateInput.schema";

type Customer = z.infer<typeof customerCreateInputObjectSchema>;

export const listCustomers = async (): Promise<Customer[]> => {
  return db.customer.findMany();
};

export const getCustomer = async (id: number): Promise<Customer | null> => {
  return db.customer.findUnique({
    where: {
      CUSTOMERID: id,
    },
  });
};
