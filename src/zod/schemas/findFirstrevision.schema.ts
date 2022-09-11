import { z } from 'zod';
import { revisionWhereInputObjectSchema } from './objects/revisionWhereInput.schema';
import { revisionOrderByWithRelationInputObjectSchema } from './objects/revisionOrderByWithRelationInput.schema';
import { revisionWhereUniqueInputObjectSchema } from './objects/revisionWhereUniqueInput.schema';
import { revisionScalarFieldEnumSchema } from './enums/revisionScalarFieldEnum.schema';

export const revisionFindFirstSchema = z.object({
  where: revisionWhereInputObjectSchema.optional(),
  orderBy: revisionOrderByWithRelationInputObjectSchema.optional(),
  cursor: revisionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(revisionScalarFieldEnumSchema).optional(),
});
