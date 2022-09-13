import { z } from "zod";
import { Customer } from "@prisma/client";

import { CustomerCreateOneSchema } from "../../zod/schemas/createOneCustomer.schema";
import { CustomerFindUniqueSchema } from "../../zod/schemas/findUniqueCustomer.schema";
import { CustomerUpdateOneSchema } from "../../zod/schemas/updateOneCustomer.schema";
import { CustomerDeleteOneSchema } from "../../zod/schemas/deleteOneCustomer.schema";

const CreateOne_Schema = CustomerCreateOneSchema;
const FindUnique_Schema = CustomerFindUniqueSchema;
const UpdateOne_Schema = CustomerUpdateOneSchema;
const DeleteOne_Schema = CustomerDeleteOneSchema;

type CreateOne_Model = z.infer<typeof CustomerCreateOneSchema>;
type FindUnique_Model = z.infer<typeof CustomerFindUniqueSchema>;
type UpdateOne_Model = z.infer<typeof CustomerUpdateOneSchema>;
type DeleteOne_Model = z.infer<typeof CustomerDeleteOneSchema>;

export { Customer };
export { CreateOne_Model, FindUnique_Model, UpdateOne_Model, DeleteOne_Model };
export { CreateOne_Schema, FindUnique_Schema, UpdateOne_Schema, DeleteOne_Schema };
