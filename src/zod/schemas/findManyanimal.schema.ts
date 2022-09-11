import { z } from 'zod';
import { animalWhereInputObjectSchema } from './objects/animalWhereInput.schema';
import { animalOrderByWithRelationInputObjectSchema } from './objects/animalOrderByWithRelationInput.schema';
import { animalWhereUniqueInputObjectSchema } from './objects/animalWhereUniqueInput.schema';
import { animalScalarFieldEnumSchema } from './enums/animalScalarFieldEnum.schema';

export const animalFindManySchema = z.object({
  where: animalWhereInputObjectSchema.optional(),
  orderBy: animalOrderByWithRelationInputObjectSchema.optional(),
  cursor: animalWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(animalScalarFieldEnumSchema).optional(),
});
