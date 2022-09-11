import { z } from 'zod';
import { customeraccountWhereUniqueInputObjectSchema } from './objects/customeraccountWhereUniqueInput.schema';

export const customeraccountFindUniqueSchema = z.object({
  where: customeraccountWhereUniqueInputObjectSchema,
});
