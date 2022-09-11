import { z } from 'zod';
import { saleanimalWhereInputObjectSchema } from './objects/saleanimalWhereInput.schema';
import { saleanimalOrderByWithRelationInputObjectSchema } from './objects/saleanimalOrderByWithRelationInput.schema';
import { saleanimalWhereUniqueInputObjectSchema } from './objects/saleanimalWhereUniqueInput.schema';
import { saleanimalScalarFieldEnumSchema } from './enums/saleanimalScalarFieldEnum.schema';

export const saleanimalFindFirstSchema = z.object({
  where: saleanimalWhereInputObjectSchema.optional(),
  orderBy: saleanimalOrderByWithRelationInputObjectSchema.optional(),
  cursor: saleanimalWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(saleanimalScalarFieldEnumSchema).optional(),
});
