import { z } from "zod";
import { Animal } from "@prisma/client";

import { AnimalCreateOneSchema } from "../../zod/schemas/createOneAnimal.schema";
import { AnimalFindUniqueSchema } from "../../zod/schemas/findUniqueAnimal.schema";
import { AnimalUpdateOneSchema } from "../../zod/schemas/updateOneAnimal.schema";
import { AnimalDeleteOneSchema } from "../../zod/schemas/deleteOneAnimal.schema";

const CreateOne_Schema = AnimalCreateOneSchema;
const FindUnique_Schema = AnimalFindUniqueSchema;
const UpdateOne_Schema = AnimalUpdateOneSchema;
const DeleteOne_Schema = AnimalDeleteOneSchema;

type CreateOne_Model = z.infer<typeof AnimalCreateOneSchema>;
type FindUnique_Model = z.infer<typeof AnimalFindUniqueSchema>;
type UpdateOne_Model = z.infer<typeof AnimalUpdateOneSchema>;
type DeleteOne_Model = z.infer<typeof AnimalDeleteOneSchema>;

export { Animal };
export { CreateOne_Model, FindUnique_Model, UpdateOne_Model, DeleteOne_Model };
export { CreateOne_Schema, FindUnique_Schema, UpdateOne_Schema, DeleteOne_Schema };
