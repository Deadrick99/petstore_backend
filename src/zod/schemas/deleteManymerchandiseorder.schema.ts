import { z } from 'zod';
import { merchandiseorderWhereInputObjectSchema } from './objects/merchandiseorderWhereInput.schema';

export const merchandiseorderDeleteManySchema = z.object({
  where: merchandiseorderWhereInputObjectSchema.optional(),
});
