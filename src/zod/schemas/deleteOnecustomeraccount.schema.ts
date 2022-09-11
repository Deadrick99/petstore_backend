import { z } from 'zod';
import { customeraccountWhereUniqueInputObjectSchema } from './objects/customeraccountWhereUniqueInput.schema';

export const customeraccountDeleteOneSchema = z.object({
  where: customeraccountWhereUniqueInputObjectSchema,
});
