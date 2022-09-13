import express from "express";
import type { Request, Response } from "express";
import * as CustomerService from "./customer.service";

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
