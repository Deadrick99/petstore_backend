import { custom } from "zod";
import { db } from "../../utils/db.server";

import * as SaleTypes from "./sale.types";

//Returns a list of all sale in the database
export const listSale = async (): Promise<SaleTypes.Sale[]> => {
    return db.sale.findMany();
}

//Returns the sale with given id, or null if no merchandise found with given id
export const getSale = async (id: number): Promise<SaleTypes.Sale | null> => {
    return db.sale.findUnique({
        where: {
            SALEID: id,
        },
    });
};

//Returns the sale with given parameters, if one matches them
export const findSale = async (
    sale: SaleTypes.FindUnique_Model
): Promise<SaleTypes.Sale | null> => {
    return db.sale.findUnique(sale);
}

//Creates sale and returns it with updated id field
export const createSale = async (newSale: SaleTypes.CreateOne_Model): Promise<SaleTypes.Sale> => {
    return db.sale.create(newSale);
};

//Updates the sale with given id with the given data and returns the modified merchandise
export const updateSale = async (
    id: number,
    newSale: SaleTypes.UpdateOne_Model
):  Promise<SaleTypes.Sale> => {
    return db.sale.update(newSale);
};

//Deletes the sale with the given id
export const deleteSale = async (id: number): Promise<void> => {
    await db.sale.delete({
        where: { SALEID: id },
    });
};