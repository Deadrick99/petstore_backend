import { z } from 'zod';
import { breedWhereInputObjectSchema } from './objects/breedWhereInput.schema';
import { breedOrderByWithRelationInputObjectSchema } from './objects/breedOrderByWithRelationInput.schema';
import { breedWhereUniqueInputObjectSchema } from './objects/breedWhereUniqueInput.schema';
import { breedScalarFieldEnumSchema } from './enums/breedScalarFieldEnum.schema';

export const breedFindManySchema = z.object({
  where: breedWhereInputObjectSchema.optional(),
  orderBy: breedOrderByWithRelationInputObjectSchema.optional(),
  cursor: breedWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(breedScalarFieldEnumSchema).optional(),
});
