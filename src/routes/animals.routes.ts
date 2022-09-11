import { Router, Request, Response } from "express";

const AnimalsRouter = Router();

AnimalsRouter
  // Get all animals: GET("api/animals/")
  .get("/", (req: Request, res: Response) => {
    res.json({ success: true, results: animals_db });
  })

  // Get one animal: GET("api/animals/{id}")
  .get("/:id", (req: Request, res: Response) => {
    try {
      const given_id = parseInt(req.params.id);
      const pet = animals_db.find((pet) => pet.id === given_id);

      if (pet) {
        res.json({ success: true, results: pet });
      } else {
        res.json({
          success: false,
          error: `No pet exists with given id: ${given_id}`,
        });
      }
    } catch (err) {
      res.json({ success: false, error: err });
    }
  })

  // Create one animal: POST("api/animals/")
  .post("/", (req: Request, res: Response) => {
    const given_pet_parse_attempt = AnimalSchema.safeParse(req.body);

    if (!given_pet_parse_attempt.success) {
      res.json({ success: false, error: given_pet_parse_attempt.error });
      return;
    }

    const last_id = animals_db[-1].id || 0;
    const new_id = last_id + 1;

    let new_pet = given_pet_parse_attempt.data;
    new_pet.id = new_id;

    animals_db.push(new_pet);
    res.json(new_pet);
  });

export { AnimalsRouter };
