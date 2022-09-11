import { z } from 'zod';
import { merchandiseorderUpdateManyMutationInputObjectSchema } from './objects/merchandiseorderUpdateManyMutationInput.schema';
import { merchandiseorderWhereInputObjectSchema } from './objects/merchandiseorderWhereInput.schema';

export const merchandiseorderUpdateManySchema = z.object({
  data: merchandiseorderUpdateManyMutationInputObjectSchema,
  where: merchandiseorderWhereInputObjectSchema.optional(),
});
