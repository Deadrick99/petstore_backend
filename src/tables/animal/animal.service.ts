import { custom } from "zod";
import { db } from "../../utils/db.server";

import * as AnimalTypes from "./animal.types";

/** Returns a list of all Animals in the database */
export const listAnimals = async(): Promise<AnimalTypes.Animal[]> => {
    return db.animal.findMany();
};

/** Returns the Animal with a given id, or nill if no Animal is found with the given id */
export const getAnimal = async (id: number): Promise<AnimalTypes.Animal | null> => {
    return db.animal.findUnique({
        where: {
            ANIMALID: id,
        }
    });
};

/** Returns the Animal with the given parameters, if one matches them */
export const findAnimal = async (
        animal: AnimalTypes.FindUnique_Model
    ): Promise<AnimalTypes.Animal | null> => {
        return db.animal.findUnique(animal);
    };
  

/** Creates an Animal and returns it with an updated id field */
export const createAnimal = async (newAnimal: AnimalTypes.CreateOne_Model): Promise<AnimalTypes.Animal> => {
    return db.animal.create(newAnimal);
};

/** Updates the Animal with the given id with the given data, and returns the modified Animal */
export const updateAnimal = async (id: number, newAnimal: AnimalTypes.UpdateOne_Model): Promise<AnimalTypes.Animal> => {
    return db.animal.update(newAnimal)
}

/** Deletes the Animal with the given id */
export const deleteAnimal = async (id: number): Promise<void> => {
    await db.animal.delete({
        where: { ANIMALID: id },
    });
};