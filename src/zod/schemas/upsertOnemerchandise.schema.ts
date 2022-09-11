import { z } from 'zod';
import { merchandiseWhereUniqueInputObjectSchema } from './objects/merchandiseWhereUniqueInput.schema';
import { merchandiseCreateInputObjectSchema } from './objects/merchandiseCreateInput.schema';
import { merchandiseUpdateInputObjectSchema } from './objects/merchandiseUpdateInput.schema';

export const merchandiseUpsertSchema = z.object({
  where: merchandiseWhereUniqueInputObjectSchema,
  create: merchandiseCreateInputObjectSchema,
  update: merchandiseUpdateInputObjectSchema,
});
