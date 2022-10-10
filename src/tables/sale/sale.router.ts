import express from "express";
import type { Request, Response } from "express";

import * as SaleTypes from "./sale.types";
import * as SaleService from "./sale.service";

export const saleRouter = express.Router();

//GET("api/sale"): List of all Sale
saleRouter.get("/", async (req: Request, res: Response) => {
    try {
        const sale_parse_attempt = SaleTypes.FindUnique_Schema.safeParse(req.body);

        if (!sale_parse_attempt.success){
            const sale = await SaleService.listSale();
            res.status(200).json(sale);
            return;
        }
        const sale = sale_parse_attempt.data;
        const foundSale = await SaleService.findSale(sale);

        res.status(200).json(foundSale);
     }  catch (err: any) {
        res.status(500).json(err.message);
     }
    });

    // Get("api/sale/:id"): Get sale by id
    saleRouter.get("/:id", async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id as string, 10);
            const sale = await SaleService.getSale(id);
        
            if (sale) {
            res.status(200).json(sale);
            }   else {
            res.status(404).json(`No sale exists with given id: '${id}'`);
            }

        }   catch (err:any) {
            res.status(500).json(err.message);
        }
    });

    // Post("api/sale"): Create select sale
    saleRouter.post("/", async (req: Request, res: Response) => {
        // Trick the safeParse      

            // must parse string date recieved into date object
            req.body.data.SALEDATE = new Date(req.body.data.SALEDATE);
        try {
            const sale_parse_attempt = SaleTypes.CreateOne_Schema.safeParse(req.body);
  
            if (!sale_parse_attempt.success) {
            res.status(400).json(sale_parse_attempt.error);
            return;
            }
  
            const newSale = sale_parse_attempt.data;
            const createdSale = await SaleService.createSale(newSale);
  
            res.status(200).json(createdSale);

        } catch (err: any) {
          res.status(500).json(err.message);
        }
    });

    // Patch("api/sale/:id") Update select sale
    saleRouter.patch("/:id", async (req: Request, res: Response) => {
        // must parse string date recieved into date object
            req.body.data.SALEDATE = new Date(req.body.data.SALEDATE);
        try {
            const id = parseInt(req.params.id as string, 10);
            const sale_parse_attempt = SaleTypes.UpdateOne_Schema.safeParse(req.body);

            if (!sale_parse_attempt.success) {
                res.status(400).json(sale_parse_attempt.error);
                return;
            }

            const newSale = sale_parse_attempt.data;
            const updatedSale = await SaleService.updateSale(id, newSale);

            res.status(200).json(updatedSale);

        } catch (err: any) {
          res.status(500).json(err.message);
        } 
    });

    //Delete("api/sale/:id"): Delete select sale
    saleRouter.delete("/:id", async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id as string, 10);

            await SaleService.deleteSale(id);

            res.sendStatus(200);

       } catch (err: any) {
         res.status(500).json(err.message);
       };
    });