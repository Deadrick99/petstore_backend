import { z } from 'zod';
import { CustomerWhereUniqueInputObjectSchema } from './objects/CustomerWhereUniqueInput.schema';

export const CustomerFindUniqueSchema = z.object({
  where: CustomerWhereUniqueInputObjectSchema,
});
