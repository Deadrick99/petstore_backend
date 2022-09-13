import { z } from 'zod';
import { RevisionWhereInputObjectSchema } from './objects/RevisionWhereInput.schema';
import { RevisionOrderByWithRelationInputObjectSchema } from './objects/RevisionOrderByWithRelationInput.schema';
import { RevisionWhereUniqueInputObjectSchema } from './objects/RevisionWhereUniqueInput.schema';
import { RevisionScalarFieldEnumSchema } from './enums/RevisionScalarFieldEnum.schema';

export const RevisionFindManySchema = z.object({
  where: RevisionWhereInputObjectSchema.optional(),
  orderBy: RevisionOrderByWithRelationInputObjectSchema.optional(),
  cursor: RevisionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(RevisionScalarFieldEnumSchema).optional(),
});
