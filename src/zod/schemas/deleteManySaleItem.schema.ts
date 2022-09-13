import { z } from 'zod';
import { SaleItemWhereInputObjectSchema } from './objects/SaleItemWhereInput.schema';

export const SaleItemDeleteManySchema = z.object({
  where: SaleItemWhereInputObjectSchema.optional(),
});
