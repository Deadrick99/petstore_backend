import { z } from "zod";
import { Supplier } from "@prisma/client";

import { SupplierCreateOneSchema } from "../../zod/schemas/createOneSupplier.schema";
import { SupplierFindUniqueSchema } from "../../zod/schemas/findUniqueSupplier.schema";
import { SupplierUpdateOneSchema } from "../../zod/schemas/updateOneSupplier.schema";
import { SupplierDeleteOneSchema } from "../../zod/schemas/deleteOneSupplier.schema";

const CreateOne_Schema = SupplierCreateOneSchema;
const FindUnique_Schema = SupplierFindUniqueSchema;
const UpdateOne_Schema = SupplierUpdateOneSchema;
const DeleteOne_Schema = SupplierDeleteOneSchema;

type CreateOne_Model = z.infer<typeof SupplierCreateOneSchema>;
type FindUnique_Model = z.infer<typeof SupplierFindUniqueSchema>;
type UpdateOne_Model = z.infer<typeof SupplierUpdateOneSchema>;
type DeleteOne_Model = z.infer<typeof SupplierDeleteOneSchema>;

export { Supplier };
export { CreateOne_Model, FindUnique_Model, UpdateOne_Model, DeleteOne_Model };
export { CreateOne_Schema, FindUnique_Schema, UpdateOne_Schema, DeleteOne_Schema};