import { z } from 'zod';
import { orderitemUpdateManyMutationInputObjectSchema } from './objects/orderitemUpdateManyMutationInput.schema';
import { orderitemWhereInputObjectSchema } from './objects/orderitemWhereInput.schema';

export const orderitemUpdateManySchema = z.object({
  data: orderitemUpdateManyMutationInputObjectSchema,
  where: orderitemWhereInputObjectSchema.optional(),
});
