import { z } from "zod";
import { Sale } from "@prisma/client";

import { SaleCreateOneSchema } from "../../zod/schemas/createOneSale.schema";
import { SaleFindUniqueSchema } from "../../zod/schemas/findUniqueSale.schema";
import { SaleUpdateOneSchema } from "../../zod/schemas/updateOneSale.schema";
import { SaleDeleteOneSchema } from "../../zod/schemas/deleteOneSale.schema";

const CreateOne_Schema = SaleCreateOneSchema;
const FindUnique_Schema = SaleFindUniqueSchema;
const UpdateOne_Schema = SaleUpdateOneSchema;
const DeleteOne_Schema = SaleDeleteOneSchema;

type CreateOne_Model = z.infer<typeof SaleCreateOneSchema>;
type FindUnique_Model = z.infer<typeof SaleFindUniqueSchema>;
type UpdateOne_Model = z.infer<typeof SaleUpdateOneSchema>;
type DeleteOne_Model = z.infer<typeof SaleDeleteOneSchema>;

export { Sale };
export { CreateOne_Model, FindUnique_Model, UpdateOne_Model, DeleteOne_Model };
export { CreateOne_Schema, FindUnique_Schema, UpdateOne_Schema, DeleteOne_Schema };