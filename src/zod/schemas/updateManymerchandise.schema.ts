import { z } from 'zod';
import { merchandiseUpdateManyMutationInputObjectSchema } from './objects/merchandiseUpdateManyMutationInput.schema';
import { merchandiseWhereInputObjectSchema } from './objects/merchandiseWhereInput.schema';

export const merchandiseUpdateManySchema = z.object({
  data: merchandiseUpdateManyMutationInputObjectSchema,
  where: merchandiseWhereInputObjectSchema.optional(),
});
