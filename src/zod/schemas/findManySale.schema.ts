import { z } from 'zod';
import { SaleWhereInputObjectSchema } from './objects/SaleWhereInput.schema';
import { SaleOrderByWithRelationInputObjectSchema } from './objects/SaleOrderByWithRelationInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './objects/SaleWhereUniqueInput.schema';
import { SaleScalarFieldEnumSchema } from './enums/SaleScalarFieldEnum.schema';

export const SaleFindManySchema = z.object({
  where: SaleWhereInputObjectSchema.optional(),
  orderBy: SaleOrderByWithRelationInputObjectSchema.optional(),
  cursor: SaleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SaleScalarFieldEnumSchema).optional(),
});
