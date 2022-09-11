import { z } from 'zod';
import { saleWhereInputObjectSchema } from './objects/saleWhereInput.schema';
import { saleOrderByWithRelationInputObjectSchema } from './objects/saleOrderByWithRelationInput.schema';
import { saleWhereUniqueInputObjectSchema } from './objects/saleWhereUniqueInput.schema';
import { saleScalarFieldEnumSchema } from './enums/saleScalarFieldEnum.schema';

export const saleFindFirstSchema = z.object({
  where: saleWhereInputObjectSchema.optional(),
  orderBy: saleOrderByWithRelationInputObjectSchema.optional(),
  cursor: saleWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(saleScalarFieldEnumSchema).optional(),
});
