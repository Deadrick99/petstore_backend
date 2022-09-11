import { z } from 'zod';
import { orderitemWhereUniqueInputObjectSchema } from './objects/orderitemWhereUniqueInput.schema';

export const orderitemDeleteOneSchema = z.object({
  where: orderitemWhereUniqueInputObjectSchema,
});
