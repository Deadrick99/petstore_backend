import express from "express";
import type { Request, Response } from "express";

import * as CustomerTypes from "./customer.types";
import * as CustomerService from "./customer.service";

export const customerRouter = express.Router();

// GET("api/customers"): List of all Customers
customerRouter.get("/", async (req: Request, res: Response) => {
  try {
    const customer_parse_attempt = CustomerTypes.FindUnique_Schema.safeParse(req.body);

    if (!customer_parse_attempt.success) {
      const customers = await CustomerService.listCustomers();
      res.status(200).json(customers);
      return;
    }

    const customer = customer_parse_attempt.data;
    const foundCustomer = await CustomerService.findCustomer(customer);

    res.status(200).json(foundCustomer);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
});

// Get("api/customers/:id"): Get author by id
customerRouter.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string, 10);
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
customerRouter.post("/", async (req: Request, res: Response) => {
  // Trick the safeParse

  try {
    const customer_parse_attempt = CustomerTypes.CreateOne_Schema.safeParse(req.body);

    if (!customer_parse_attempt.success) {
      res.status(400).json(customer_parse_attempt.error);
      return;
    }

    const newCustomer = customer_parse_attempt.data;
    const createdCustomer = await CustomerService.createCustomer(newCustomer);

    res.status(200).json(createdCustomer);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
});

// Patch("api/customers/:id"): Update a Customer
customerRouter.patch("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string, 10);
    const customer_parse_attempt = CustomerTypes.UpdateOne_Schema.safeParse(req.body);

    if (!customer_parse_attempt.success) {
      res.status(400).json(customer_parse_attempt.error);
      return;
    }

    const newCustomer = customer_parse_attempt.data;
    const updatedCustomer = await CustomerService.updateCustomer(id, newCustomer);

    res.status(200).json(updatedCustomer);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
});

// Delete("api/customers/:id"): Delete a Customer
customerRouter.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id as string, 10);

    await CustomerService.deleteCustomer(id);

    res.sendStatus(200);
  } catch (err: any) {
    res.status(500).json(err.message);
  }
});
