import { z } from 'zod';
import { animalorderitemWhereInputObjectSchema } from './objects/animalorderitemWhereInput.schema';
import { animalorderitemOrderByWithRelationInputObjectSchema } from './objects/animalorderitemOrderByWithRelationInput.schema';
import { animalorderitemWhereUniqueInputObjectSchema } from './objects/animalorderitemWhereUniqueInput.schema';
import { animalorderitemScalarFieldEnumSchema } from './enums/animalorderitemScalarFieldEnum.schema';

export const animalorderitemFindFirstSchema = z.object({
  where: animalorderitemWhereInputObjectSchema.optional(),
  orderBy: animalorderitemOrderByWithRelationInputObjectSchema.optional(),
  cursor: animalorderitemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(animalorderitemScalarFieldEnumSchema).optional(),
});
