import { z } from 'zod';
import { AnimalOrderItemWhereInputObjectSchema } from './objects/AnimalOrderItemWhereInput.schema';
import { AnimalOrderItemOrderByWithRelationInputObjectSchema } from './objects/AnimalOrderItemOrderByWithRelationInput.schema';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './objects/AnimalOrderItemWhereUniqueInput.schema';
import { AnimalOrderItemScalarFieldEnumSchema } from './enums/AnimalOrderItemScalarFieldEnum.schema';

export const AnimalOrderItemFindManySchema = z.object({
  where: AnimalOrderItemWhereInputObjectSchema.optional(),
  orderBy: AnimalOrderItemOrderByWithRelationInputObjectSchema.optional(),
  cursor: AnimalOrderItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(AnimalOrderItemScalarFieldEnumSchema).optional(),
});
