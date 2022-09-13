import { z } from 'zod';
import { CustomerAccountWhereInputObjectSchema } from './objects/CustomerAccountWhereInput.schema';

export const CustomerAccountDeleteManySchema = z.object({
  where: CustomerAccountWhereInputObjectSchema.optional(),
});
