import { z } from 'zod';
import { CustomerWhereUniqueInputObjectSchema } from './objects/CustomerWhereUniqueInput.schema';
import { CustomerCreateInputObjectSchema } from './objects/CustomerCreateInput.schema';
import { CustomerUpdateInputObjectSchema } from './objects/CustomerUpdateInput.schema';

export const CustomerUpsertSchema = z.object({
  where: CustomerWhereUniqueInputObjectSchema,
  create: CustomerCreateInputObjectSchema,
  update: CustomerUpdateInputObjectSchema,
});
