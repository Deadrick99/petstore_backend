import { custom } from "zod";
import { db } from "../../utils/db.server";

import * as CustomerTypes from "./customer.types";

/** Returns a list of all Customers in the database */
export const listCustomers = async (): Promise<CustomerTypes.Customer[]> => {
  return db.customer.findMany();
};

/** Returns the Customer with given id, or null if no Customer found with given id */
export const getCustomer = async (id: number): Promise<CustomerTypes.Customer | null> => {
  return db.customer.findUnique({
    where: {
      CUSTOMERID: id,
    },
  });
};

/** Returns the Customer with the given parameters, if one matches them */
export const findCustomer = async (
  customer: CustomerTypes.FindUnique_Model
): Promise<CustomerTypes.Customer | null> => {
  return db.customer.findUnique(customer);
};

/** Creates a Customer and returns it with updated id field */
export const createCustomer = async (newCustomer: CustomerTypes.CreateOne_Model): Promise<CustomerTypes.Customer> => {
  return db.customer.create(newCustomer);
};

/** Updates the Customer with given id with the given data, and returns the modified Customer */
export const updateCustomer = async (
  id: number,
  newCustomer: CustomerTypes.UpdateOne_Model
): Promise<CustomerTypes.Customer> => {
  return db.customer.update(newCustomer);
};

/** Deletes the Customer with the given id */
export const deleteCustomer = async (id: number): Promise<void> => {
  await db.customer.delete({
    where: { CUSTOMERID: id },
  });
};
