import { custom } from "zod";
import { db } from "../../utils/db.server";

import * as MerchandiseTypes from "./merchandise.types";

//Returns a list of all merchandise in the database
export const listMerchandise = async (): Promise<MerchandiseTypes.Merchandise[]> => {
    return db.merchandise.findMany();
}

//Returns the merchandise with given id, or null if no merchandise found with given id
export const getMerchandise = async (id: number): Promise<MerchandiseTypes.Merchandise | null> => {
    return db.merchandise.findUnique({
        where: {
            ITEMID: id,
        },
    });
};

//Returns the merchandise with given parameters, if one matches them
export const findMerchandise = async (
    merchandise: MerchandiseTypes.FindUnique_Model
): Promise<MerchandiseTypes.Merchandise | null> => {
    return db.merchandise.findUnique(merchandise);
}

//Creates merchandise and returns it with updated id field
export const createMerchandise = async (newMerchandise: MerchandiseTypes.CreateOne_Model): Promise<MerchandiseTypes.Merchandise> => {
    return db.merchandise.create(newMerchandise);
};

//Updates the merchandise with given id with the given data and returns the modified merchandise
export const updateMerchandise = async (
    id: number,
    newMerchandise: MerchandiseTypes.UpdateOne_Model
):  Promise<MerchandiseTypes.Merchandise> => {
    return db.merchandise.update(newMerchandise);
};

//Deletes the merchandise with the given id
export const deleteMerchandise = async (id: number): Promise<void> => {
    await db.merchandise.delete({
        where: { ITEMID: id },
    });
};