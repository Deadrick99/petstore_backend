import { z } from 'zod';
import { SaleItemUpdateManyMutationInputObjectSchema } from './objects/SaleItemUpdateManyMutationInput.schema';
import { SaleItemWhereInputObjectSchema } from './objects/SaleItemWhereInput.schema';

export const SaleItemUpdateManySchema = z.object({
  data: SaleItemUpdateManyMutationInputObjectSchema,
  where: SaleItemWhereInputObjectSchema.optional(),
});
