import { z } from 'zod';
import { CustomerAccountWhereUniqueInputObjectSchema } from './objects/CustomerAccountWhereUniqueInput.schema';

export const CustomerAccountDeleteOneSchema = z.object({
  where: CustomerAccountWhereUniqueInputObjectSchema,
});
