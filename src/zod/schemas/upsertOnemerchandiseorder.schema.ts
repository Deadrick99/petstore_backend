import { z } from 'zod';
import { merchandiseorderWhereUniqueInputObjectSchema } from './objects/merchandiseorderWhereUniqueInput.schema';
import { merchandiseorderCreateInputObjectSchema } from './objects/merchandiseorderCreateInput.schema';
import { merchandiseorderUpdateInputObjectSchema } from './objects/merchandiseorderUpdateInput.schema';

export const merchandiseorderUpsertSchema = z.object({
  where: merchandiseorderWhereUniqueInputObjectSchema,
  create: merchandiseorderCreateInputObjectSchema,
  update: merchandiseorderUpdateInputObjectSchema,
});
