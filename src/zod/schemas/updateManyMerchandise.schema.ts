import { z } from 'zod';
import { MerchandiseUpdateManyMutationInputObjectSchema } from './objects/MerchandiseUpdateManyMutationInput.schema';
import { MerchandiseWhereInputObjectSchema } from './objects/MerchandiseWhereInput.schema';

export const MerchandiseUpdateManySchema = z.object({
  data: MerchandiseUpdateManyMutationInputObjectSchema,
  where: MerchandiseWhereInputObjectSchema.optional(),
});
