import express from "express";
import type { Request, Response } from "express";
import * as CustomerService from "./customer.service";

import { Customer } from "@prisma/client";

// Input validators
import { CustomerCreateOneSchema } from "../../zod/schemas/createOneCustomer.schema";

export const customerRouter = express.Router();

// GET("api/customers"): List of all Customers
customerRouter.get("/", async (req: Request, res: Response) => {
  try {
    const customers = await CustomerService.listCustomers();
    res.status(200).json(customers);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
});

// Get("api/customers/:id"): Get author by id
customerRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    const customer = await CustomerService.getCustomer(id);

    if (customer) {
      res.status(200).json(customer);
    } else {
      res.status(404).json(`No Customer exists with given id: '${id}'`);
    }
  } catch (err: any) {
    res.status(500).json(err.message);
  }
});

// Post("api/customers"): Create a Customer
customerRouter.get("/", async (req: Request, res: Response) => {
  try {
    const customer_parse_attempt = CustomerCreateOneSchema.safeParse(req.body);

    if (!customer_parse_attempt.success) {
      res.status(400).json(customer_parse_attempt.error);
      return;
    }

    const newCustomer = customer_parse_attempt.data as Customer;

    CustomerService.createCustomer(newCustomer);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
});
