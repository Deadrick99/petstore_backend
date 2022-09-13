import { z } from 'zod';
import { AnimalOrderItemWhereInputObjectSchema } from './objects/AnimalOrderItemWhereInput.schema';
import { AnimalOrderItemOrderByWithAggregationInputObjectSchema } from './objects/AnimalOrderItemOrderByWithAggregationInput.schema';
import { AnimalOrderItemScalarWhereWithAggregatesInputObjectSchema } from './objects/AnimalOrderItemScalarWhereWithAggregatesInput.schema';
import { AnimalOrderItemScalarFieldEnumSchema } from './enums/AnimalOrderItemScalarFieldEnum.schema';

export const AnimalOrderItemGroupBySchema = z.object({
  where: AnimalOrderItemWhereInputObjectSchema.optional(),
  orderBy: AnimalOrderItemOrderByWithAggregationInputObjectSchema,
  having: AnimalOrderItemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AnimalOrderItemScalarFieldEnumSchema),
});
