import express from "express";
import type { Request, Response } from "express";

import * as SupplierTypes from "./supplier.types";
import * as SupplierService from "./supplier.service";

export const supplierRouter = express.Router();

//GET("api/supplier"): List of all Supplier
supplierRouter.get("/", async (req: Request, res: Response) => {
    try {
        const supplier_parse_attempt = SupplierTypes.FindUnique_Schema.safeParse(req.body);

        if (!supplier_parse_attempt.success){
            const supplier = await SupplierService.listSupplier();
            res.status(200).json(supplier);
            return;
        }
        const supplier = supplier_parse_attempt.data;
        const foundSupplier = await SupplierService.findSupplier(supplier);

        res.status(200).json(foundSupplier);
     }  catch (err: any) {
        res.status(500).json(err.message);
     }
    });

    // Get("api/supplier/:id"): Get supplier by id
    supplierRouter.get("/:id", async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id as string, 10);
            const supplier = await SupplierService.getSupplier(id);
        
            if (supplier) {
            res.status(200).json(supplier);
            }   else {
            res.status(404).json(`No supplier exists with given id: '${id}'`);
            }

        }   catch (err:any) {
            res.status(500).json(err.message);
        }
    });

    // Post("api/supplier"): Create select supplier
    supplierRouter.post("/", async (req: Request, res: Response) => {
        // Trick the safeParse      

          
        try {
            const supplier_parse_attempt = SupplierTypes.CreateOne_Schema.safeParse(req.body);
  
            if (!supplier_parse_attempt.success) {
            res.status(400).json(supplier_parse_attempt.error);
            return;
            }
  
            const newSupplier = supplier_parse_attempt.data;
            const createdSupplier = await SupplierService.createSupplier(newSupplier);
  
            res.status(200).json(createdSupplier);

        } catch (err: any) {
          res.status(500).json(err.message);
        }
    });

    // Patch("api/supplier/:id") Update select supplier
    supplierRouter.patch("/:id", async (req: Request, res: Response) =>{
        try {
            const id = parseInt(req.params.id as string, 10);
            const supplier_parse_attempt = SupplierTypes.UpdateOne_Schema.safeParse(req.body);

            if (!supplier_parse_attempt.success) {
                res.status(400).json(supplier_parse_attempt.error);
                return;
            }

            const newSupplier = supplier_parse_attempt.data;
            const updatedSupplier = await SupplierService.updateSupplier(id, newSupplier);

            res.status(200).json(updatedSupplier);

        } catch (err: any) {
          res.status(500).json(err.message);
        } 
    });

    //Delete("api/supplier/:id"): Delete select supplier
    supplierRouter.delete("/:id", async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id as string, 10);

            await SupplierService.deleteSupplier(id);

            res.sendStatus(200);

       } catch (err: any) {
         res.status(500).json(err.message);
       };
    });