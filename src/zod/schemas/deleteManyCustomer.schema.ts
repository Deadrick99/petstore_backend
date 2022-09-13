import { z } from 'zod';
import { CustomerWhereInputObjectSchema } from './objects/CustomerWhereInput.schema';

export const CustomerDeleteManySchema = z.object({
  where: CustomerWhereInputObjectSchema.optional(),
});
