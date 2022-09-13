import { z } from 'zod';
import { AnimalOrderItemWhereInputObjectSchema } from './objects/AnimalOrderItemWhereInput.schema';
import { AnimalOrderItemOrderByWithRelationInputObjectSchema } from './objects/AnimalOrderItemOrderByWithRelationInput.schema';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './objects/AnimalOrderItemWhereUniqueInput.schema';

export const AnimalOrderItemAggregateSchema = z.object({
  where: AnimalOrderItemWhereInputObjectSchema.optional(),
  orderBy: AnimalOrderItemOrderByWithRelationInputObjectSchema.optional(),
  cursor: AnimalOrderItemWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
