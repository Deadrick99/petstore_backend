import { z } from 'zod';
import { orderitemWhereUniqueInputObjectSchema } from './objects/orderitemWhereUniqueInput.schema';
import { orderitemCreateInputObjectSchema } from './objects/orderitemCreateInput.schema';
import { orderitemUpdateInputObjectSchema } from './objects/orderitemUpdateInput.schema';

export const orderitemUpsertSchema = z.object({
  where: orderitemWhereUniqueInputObjectSchema,
  create: orderitemCreateInputObjectSchema,
  update: orderitemUpdateInputObjectSchema,
});
