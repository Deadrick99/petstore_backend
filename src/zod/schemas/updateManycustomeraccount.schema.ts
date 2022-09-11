import { z } from 'zod';
import { customeraccountUpdateManyMutationInputObjectSchema } from './objects/customeraccountUpdateManyMutationInput.schema';
import { customeraccountWhereInputObjectSchema } from './objects/customeraccountWhereInput.schema';

export const customeraccountUpdateManySchema = z.object({
  data: customeraccountUpdateManyMutationInputObjectSchema,
  where: customeraccountWhereInputObjectSchema.optional(),
});
