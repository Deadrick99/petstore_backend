import { z } from 'zod';
import { merchandiseWhereInputObjectSchema } from './objects/merchandiseWhereInput.schema';

export const merchandiseDeleteManySchema = z.object({
  where: merchandiseWhereInputObjectSchema.optional(),
});
