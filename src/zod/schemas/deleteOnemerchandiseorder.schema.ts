import { z } from 'zod';
import { merchandiseorderWhereUniqueInputObjectSchema } from './objects/merchandiseorderWhereUniqueInput.schema';

export const merchandiseorderDeleteOneSchema = z.object({
  where: merchandiseorderWhereUniqueInputObjectSchema,
});
