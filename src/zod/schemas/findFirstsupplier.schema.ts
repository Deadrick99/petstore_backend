import { z } from 'zod';
import { supplierWhereInputObjectSchema } from './objects/supplierWhereInput.schema';
import { supplierOrderByWithRelationInputObjectSchema } from './objects/supplierOrderByWithRelationInput.schema';
import { supplierWhereUniqueInputObjectSchema } from './objects/supplierWhereUniqueInput.schema';
import { supplierScalarFieldEnumSchema } from './enums/supplierScalarFieldEnum.schema';

export const supplierFindFirstSchema = z.object({
  where: supplierWhereInputObjectSchema.optional(),
  orderBy: supplierOrderByWithRelationInputObjectSchema.optional(),
  cursor: supplierWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(supplierScalarFieldEnumSchema).optional(),
});
