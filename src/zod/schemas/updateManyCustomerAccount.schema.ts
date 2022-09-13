import { z } from 'zod';
import { CustomerAccountUpdateManyMutationInputObjectSchema } from './objects/CustomerAccountUpdateManyMutationInput.schema';
import { CustomerAccountWhereInputObjectSchema } from './objects/CustomerAccountWhereInput.schema';

export const CustomerAccountUpdateManySchema = z.object({
  data: CustomerAccountUpdateManyMutationInputObjectSchema,
  where: CustomerAccountWhereInputObjectSchema.optional(),
});
