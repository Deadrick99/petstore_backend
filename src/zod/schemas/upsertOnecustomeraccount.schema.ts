import { z } from 'zod';
import { customeraccountWhereUniqueInputObjectSchema } from './objects/customeraccountWhereUniqueInput.schema';
import { customeraccountCreateInputObjectSchema } from './objects/customeraccountCreateInput.schema';
import { customeraccountUpdateInputObjectSchema } from './objects/customeraccountUpdateInput.schema';

export const customeraccountUpsertSchema = z.object({
  where: customeraccountWhereUniqueInputObjectSchema,
  create: customeraccountCreateInputObjectSchema,
  update: customeraccountUpdateInputObjectSchema,
});
