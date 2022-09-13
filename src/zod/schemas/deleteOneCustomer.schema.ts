import { z } from 'zod';
import { CustomerWhereUniqueInputObjectSchema } from './objects/CustomerWhereUniqueInput.schema';

export const CustomerDeleteOneSchema = z.object({
  where: CustomerWhereUniqueInputObjectSchema,
});
