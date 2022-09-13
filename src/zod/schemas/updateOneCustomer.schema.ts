import { z } from 'zod';
import { CustomerUpdateInputObjectSchema } from './objects/CustomerUpdateInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './objects/CustomerWhereUniqueInput.schema';

export const CustomerUpdateOneSchema = z.object({
  data: CustomerUpdateInputObjectSchema,
  where: CustomerWhereUniqueInputObjectSchema,
});
