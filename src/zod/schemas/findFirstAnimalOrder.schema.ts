import { z } from 'zod';
import { AnimalOrderWhereInputObjectSchema } from './objects/AnimalOrderWhereInput.schema';
import { AnimalOrderOrderByWithRelationInputObjectSchema } from './objects/AnimalOrderOrderByWithRelationInput.schema';
import { AnimalOrderWhereUniqueInputObjectSchema } from './objects/AnimalOrderWhereUniqueInput.schema';
import { AnimalOrderScalarFieldEnumSchema } from './enums/AnimalOrderScalarFieldEnum.schema';

export const AnimalOrderFindFirstSchema = z.object({
  where: AnimalOrderWhereInputObjectSchema.optional(),
  orderBy: AnimalOrderOrderByWithRelationInputObjectSchema.optional(),
  cursor: AnimalOrderWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AnimalOrderScalarFieldEnumSchema).optional(),
});
