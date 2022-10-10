import { z } from "zod";
import { Merchandise } from "@prisma/client";

import { MerchandiseCreateOneSchema } from "../../zod/schemas/createOneMerchandise.schema";
import { MerchandiseFindUniqueSchema } from "../../zod/schemas/findUniqueMerchandise.schema";
import { MerchandiseUpdateOneSchema } from "../../zod/schemas/updateOneMerchandise.schema";
import { MerchandiseDeleteOneSchema } from "../../zod/schemas/deleteOneMerchandise.schema";

const CreateOne_Schema = MerchandiseCreateOneSchema;
const FindUnique_Schema = MerchandiseFindUniqueSchema;
const UpdateOne_Schema = MerchandiseUpdateOneSchema;
const DeleteOne_Schema = MerchandiseDeleteOneSchema;

type CreateOne_Model = z.infer<typeof MerchandiseCreateOneSchema>;
type FindUnique_Model = z.infer<typeof MerchandiseFindUniqueSchema>;
type UpdateOne_Model = z.infer<typeof MerchandiseUpdateOneSchema>;
type DeleteOne_Model = z.infer<typeof MerchandiseDeleteOneSchema>;

export { Merchandise };
export { CreateOne_Model, FindUnique_Model, UpdateOne_Model, DeleteOne_Model };
export { CreateOne_Schema, FindUnique_Schema, UpdateOne_Schema, DeleteOne_Schema };
