import { z } from 'zod';
import { orderitemUpdateInputObjectSchema } from './objects/orderitemUpdateInput.schema';
import { orderitemWhereUniqueInputObjectSchema } from './objects/orderitemWhereUniqueInput.schema';

export const orderitemUpdateOneSchema = z.object({
  data: orderitemUpdateInputObjectSchema,
  where: orderitemWhereUniqueInputObjectSchema,
});
