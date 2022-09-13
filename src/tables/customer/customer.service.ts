import { db } from "../../utils/db.server";
import type { Customer } from "@prisma/client";

/** Returns a list of all Customers in the database */
export const listCustomers = async (): Promise<Customer[]> => {
  return db.customer.findMany();
};

/** Returns the Customer with given id, or null if no Customer found with given id */
export const getCustomer = async (id: number): Promise<Customer | null> => {
  return db.customer.findUnique({
    where: {
      CUSTOMERID: id,
    },
  });
};

/** Creates a Customer and returns it with updated id field */
export const createCustomer = async (newCustomer: Customer): Promise<Customer> => {
  return db.customer.create({
    data: newCustomer,
  });
};

/** Updates the Customer with given id with the given data, and returns the modified Customer */
export const updateCustomer = async (id: number, newCustomer: Customer): Promise<Customer> => {
  return db.customer.update({
    where: { CUSTOMERID: id },
    data: newCustomer,
  });
};

/** Deletes the Customer with the given id */
export const deleteCustomer = async (id: number): Promise<void> => {
  await db.customer.delete({
    where: { CUSTOMERID: id },
  });
};
