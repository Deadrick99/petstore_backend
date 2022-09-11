import { z } from 'zod';
import { merchandiseWhereUniqueInputObjectSchema } from './objects/merchandiseWhereUniqueInput.schema';

export const merchandiseDeleteOneSchema = z.object({
  where: merchandiseWhereUniqueInputObjectSchema,
});
