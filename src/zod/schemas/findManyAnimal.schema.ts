import { z } from 'zod';
import { AnimalWhereInputObjectSchema } from './objects/AnimalWhereInput.schema';
import { AnimalOrderByWithRelationInputObjectSchema } from './objects/AnimalOrderByWithRelationInput.schema';
import { AnimalWhereUniqueInputObjectSchema } from './objects/AnimalWhereUniqueInput.schema';
import { AnimalScalarFieldEnumSchema } from './enums/AnimalScalarFieldEnum.schema';

export const AnimalFindManySchema = z.object({
  where: AnimalWhereInputObjectSchema.optional(),
  orderBy: AnimalOrderByWithRelationInputObjectSchema.optional(),
  cursor: AnimalWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AnimalScalarFieldEnumSchema).optional(),
});
