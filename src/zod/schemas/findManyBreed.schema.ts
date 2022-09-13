import { z } from 'zod';
import { BreedWhereInputObjectSchema } from './objects/BreedWhereInput.schema';
import { BreedOrderByWithRelationInputObjectSchema } from './objects/BreedOrderByWithRelationInput.schema';
import { BreedWhereUniqueInputObjectSchema } from './objects/BreedWhereUniqueInput.schema';
import { BreedScalarFieldEnumSchema } from './enums/BreedScalarFieldEnum.schema';

export const BreedFindManySchema = z.object({
  where: BreedWhereInputObjectSchema.optional(),
  orderBy: BreedOrderByWithRelationInputObjectSchema.optional(),
  cursor: BreedWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(BreedScalarFieldEnumSchema).optional(),
});
