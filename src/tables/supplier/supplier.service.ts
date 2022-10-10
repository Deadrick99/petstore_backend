import { custom } from "zod";
import { db } from "../../utils/db.server";

import * as SupplierTypes from "./supplier.types";
//Returns a list of all supplier in the database
export const listSupplier = async (): Promise<SupplierTypes.Supplier[]> => {
    return db.supplier.findMany();
}

//Returns the supplier with given id, or null if no merchandise found with given id
export const getSupplier = async (id: number): Promise<SupplierTypes.Supplier | null> => {
    return db.supplier.findUnique({
        where: {
            SUPPLIERID: id,
        },
    });
};

//Returns the supplier with given parameters, if one matches them
export const findSupplier = async (
    supplier: SupplierTypes.FindUnique_Model): Promise<SupplierTypes.Supplier | null> => {
    return db.supplier.findUnique(supplier);
}

//Creates supplier and returns it with updated id field
export const createSupplier = async (newSupplier: SupplierTypes.CreateOne_Model): Promise<SupplierTypes.Supplier> => {
    return db.supplier.create(newSupplier);
};

//Updates the supplier with given id with the given data and returns the modified merchandise
export const updateSupplier = async (
    id: number,
    newSupplier: SupplierTypes.UpdateOne_Model): Promise<SupplierTypes.Supplier> => {
    return db.supplier.update(newSupplier);
};

//Deletes the supplier with the given id
export const deleteSupplier = async (id: number): Promise<void> => {
    await db.supplier.delete({
        where: { SUPPLIERID: id },
    });
};