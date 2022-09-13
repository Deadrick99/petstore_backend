import { z } from 'zod';
import { CustomerAccountWhereUniqueInputObjectSchema } from './objects/CustomerAccountWhereUniqueInput.schema';
import { CustomerAccountCreateInputObjectSchema } from './objects/CustomerAccountCreateInput.schema';
import { CustomerAccountUpdateInputObjectSchema } from './objects/CustomerAccountUpdateInput.schema';

export const CustomerAccountUpsertSchema = z.object({
  where: CustomerAccountWhereUniqueInputObjectSchema,
  create: CustomerAccountCreateInputObjectSchema,
  update: CustomerAccountUpdateInputObjectSchema,
});
