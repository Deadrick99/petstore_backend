import { z } from 'zod';
import { CustomerUpdateManyMutationInputObjectSchema } from './objects/CustomerUpdateManyMutationInput.schema';
import { CustomerWhereInputObjectSchema } from './objects/CustomerWhereInput.schema';

export const CustomerUpdateManySchema = z.object({
  data: CustomerUpdateManyMutationInputObjectSchema,
  where: CustomerWhereInputObjectSchema.optional(),
});
