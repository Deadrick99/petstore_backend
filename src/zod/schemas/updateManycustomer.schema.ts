import { z } from 'zod';
import { customerUpdateManyMutationInputObjectSchema } from './objects/customerUpdateManyMutationInput.schema';
import { customerWhereInputObjectSchema } from './objects/customerWhereInput.schema';

export const customerUpdateManySchema = z.object({
  data: customerUpdateManyMutationInputObjectSchema,
  where: customerWhereInputObjectSchema.optional(),
});
