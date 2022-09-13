import { z } from 'zod';
import { CustomerAccountUpdateInputObjectSchema } from './objects/CustomerAccountUpdateInput.schema';
import { CustomerAccountWhereUniqueInputObjectSchema } from './objects/CustomerAccountWhereUniqueInput.schema';

export const CustomerAccountUpdateOneSchema = z.object({
  data: CustomerAccountUpdateInputObjectSchema,
  where: CustomerAccountWhereUniqueInputObjectSchema,
});
