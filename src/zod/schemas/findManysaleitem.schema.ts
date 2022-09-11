import { z } from 'zod';
import { saleitemWhereInputObjectSchema } from './objects/saleitemWhereInput.schema';
import { saleitemOrderByWithRelationInputObjectSchema } from './objects/saleitemOrderByWithRelationInput.schema';
import { saleitemWhereUniqueInputObjectSchema } from './objects/saleitemWhereUniqueInput.schema';
import { saleitemScalarFieldEnumSchema } from './enums/saleitemScalarFieldEnum.schema';

export const saleitemFindManySchema = z.object({
  where: saleitemWhereInputObjectSchema.optional(),
  orderBy: saleitemOrderByWithRelationInputObjectSchema.optional(),
  cursor: saleitemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(saleitemScalarFieldEnumSchema).optional(),
});
