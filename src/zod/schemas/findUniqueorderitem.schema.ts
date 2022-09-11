import { z } from 'zod';
import { orderitemWhereUniqueInputObjectSchema } from './objects/orderitemWhereUniqueInput.schema';

export const orderitemFindUniqueSchema = z.object({
  where: orderitemWhereUniqueInputObjectSchema,
});
