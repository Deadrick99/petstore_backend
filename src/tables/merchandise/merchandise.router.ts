import express from "express";
import type { Request, Response } from "express";

import * as MerchandiseTypes from "./merchandise.types";
import * as MerchandiseService from "./merchandise.service";

export const merchandiseRouter = express.Router();

//GET("api/merchandise"): List of all Merchandise
merchandiseRouter.get("/", async (req: Request, res: Response) => {
    try {
        const merchandise_parse_attempt = MerchandiseTypes.FindUnique_Schema.safeParse(req.body);

        if (!merchandise_parse_attempt.success){
            const merchandise = await MerchandiseService.listMerchandise();
            res.status(200).json(merchandise);
            return;
        }

        const merchandise = merchandise_parse_attempt.data;
        const foundMerchandise = await MerchandiseService.findMerchandise(merchandise);

        res.status(200).json(foundMerchandise);
     }  catch (err: any) {
        res.status(500).json(err.message);
     }
    });

    // Get("api/merchandise/:id"): Get merchandise by id
    merchandiseRouter.get("/:id", async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id as string, 10);
            const merchandise = await MerchandiseService.getMerchandise(id);
        
            if (merchandise) {
            res.status(200).json(merchandise);
            }   else {
            res.status(404).json(`No merchandise exists with given id: '${id}'`);
            }

        }   catch (err:any) {
            res.status(500).json(err.message);
        }
    });

    // Post("api/merchandise"): Create select merchandise
    merchandiseRouter.post("/", async (req: Request, res: Response) => {
        // Trick the safeParse 
  
        try {
            const merchandise_parse_attempt = MerchandiseTypes.CreateOne_Schema.safeParse(req.body);
  
            if (!merchandise_parse_attempt.success) {
            res.status(400).json(merchandise_parse_attempt.error);
            return;
            }
  
            const newMerchandise = merchandise_parse_attempt.data;
            const createdMerchandise = await MerchandiseService.createMerchandise(newMerchandise);
  
            res.status(200).json(createdMerchandise);

        } catch (err: any) {
          res.status(500).json(err.message);
        }
    });

    // Patch("api/merchandise/:id") Update select merchandise
    merchandiseRouter.patch("/:id", async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id as string, 10);
            const merchandise_parse_attempt = MerchandiseTypes.UpdateOne_Schema.safeParse(req.body);

            if (!merchandise_parse_attempt.success) {
                res.status(400).json(merchandise_parse_attempt.error);
                return;
            }

            const newMerchandise = merchandise_parse_attempt.data;
            const updatedMerchandise = await MerchandiseService.updateMerchandise(id, newMerchandise);

            res.status(200).json(updatedMerchandise);

        } catch (err: any) {
          res.status(500).json(err.message);
        } 
    });

    //Delete("api/merchandise/:id"): Delete select merchandise
    merchandiseRouter.delete("/:id", async (req: Request, res: Response) => {
        try {
            const id = parseInt(req.params.id as string, 10);

            await MerchandiseService.deleteMerchandise(id);

            res.sendStatus(200);

       } catch (err: any) {
         res.status(500).json(err.message);
       }
    });