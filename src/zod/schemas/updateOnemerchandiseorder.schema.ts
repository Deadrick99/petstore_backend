import { z } from 'zod';
import { merchandiseorderUpdateInputObjectSchema } from './objects/merchandiseorderUpdateInput.schema';
import { merchandiseorderWhereUniqueInputObjectSchema } from './objects/merchandiseorderWhereUniqueInput.schema';

export const merchandiseorderUpdateOneSchema = z.object({
  data: merchandiseorderUpdateInputObjectSchema,
  where: merchandiseorderWhereUniqueInputObjectSchema,
});
