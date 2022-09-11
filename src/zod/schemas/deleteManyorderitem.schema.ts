import { z } from 'zod';
import { orderitemWhereInputObjectSchema } from './objects/orderitemWhereInput.schema';

export const orderitemDeleteManySchema = z.object({
  where: orderitemWhereInputObjectSchema.optional(),
});
