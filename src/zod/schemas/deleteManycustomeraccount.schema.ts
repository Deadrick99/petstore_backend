import { z } from 'zod';
import { customeraccountWhereInputObjectSchema } from './objects/customeraccountWhereInput.schema';

export const customeraccountDeleteManySchema = z.object({
  where: customeraccountWhereInputObjectSchema.optional(),
});
