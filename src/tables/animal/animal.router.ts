import express from "express";
import type { Request, Response } from "express";

import * as AnimalTypes from "./animal.types";
import * as AnimalService from "./animal.service";

export const animalRouter = express.Router();

// GET("api/animals"): List of all Animals
animalRouter.get("/", async (req: Request, res: Response) => {
    try {
        const animal_parse_attempt = AnimalTypes.FindUnique_Schema.safeParse(req.body);

        if (!animal_parse_attempt.success) {
            const animals = await AnimalService.listAnimals();
            res.status(200).json(animals);
            return;
        }

        const animal = animal_parse_attempt.data;
        const foundAnimal = await AnimalService.findAnimal(animal);

        res.status(200).json(foundAnimal);
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

// Get("api/animals/:id"): Get author by id
animalRouter.get("/:id", async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        const animal = await AnimalService.getAnimal(id);

        if (animal) {
        res.status(200).json(animal);
        } else {
        res.status(404).json(`No Animal exists with given id: '${id}'`);
        }
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});

// Post("api/animals"): Create a Animal
animalRouter.post("/", async (req: Request, res: Response) => {
    // Trick the safeParse
  
    try {
      const animal_parse_attempt = AnimalTypes.CreateOne_Schema.safeParse(req.body);
  
      if (!animal_parse_attempt.success) {
        res.status(400).json(animal_parse_attempt.error);
        return;
      }
  
      const newAnimal = animal_parse_attempt.data;
      const createdAnimal = await AnimalService.createAnimal(newAnimal);
  
      res.status(200).json(createdAnimal);
    } catch (err: any) {
      res.status(500).json(err.message);
    }
  });
  
// Patch("api/animal/:id"): Update a Animal
animalRouter.patch("/:id", async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);
        const animal_parse_attempt = AnimalTypes.UpdateOne_Schema.safeParse(req.body);

        if (!animal_parse_attempt.success) {
        res.status(400).json(animal_parse_attempt.error);
        return;
        }

        const newAnimal = animal_parse_attempt.data;
        const updatedAnimal = await AnimalService.updateAnimal(id, newAnimal);

        res.status(200).json(updatedAnimal);
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});
  
// Delete("api/customers/:id"): Delete a Customer
animalRouter.delete("/:id", async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id as string, 10);

        await AnimalService.deleteAnimal(id);

        res.sendStatus(200);
    } catch (err: any) {
        res.status(500).json(err.message);
    }
});
