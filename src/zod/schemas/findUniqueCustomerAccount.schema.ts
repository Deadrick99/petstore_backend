import { z } from 'zod';
import { CustomerAccountWhereUniqueInputObjectSchema } from './objects/CustomerAccountWhereUniqueInput.schema';

export const CustomerAccountFindUniqueSchema = z.object({
  where: CustomerAccountWhereUniqueInputObjectSchema,
});
