import { z } from 'zod';
import { customeraccountUpdateInputObjectSchema } from './objects/customeraccountUpdateInput.schema';
import { customeraccountWhereUniqueInputObjectSchema } from './objects/customeraccountWhereUniqueInput.schema';

export const customeraccountUpdateOneSchema = z.object({
  data: customeraccountUpdateInputObjectSchema,
  where: customeraccountWhereUniqueInputObjectSchema,
});
