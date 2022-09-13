import { z } from 'zod';
import { AnimalWhereInputObjectSchema } from './objects/AnimalWhereInput.schema';
import { AnimalOrderByWithAggregationInputObjectSchema } from './objects/AnimalOrderByWithAggregationInput.schema';
import { AnimalScalarWhereWithAggregatesInputObjectSchema } from './objects/AnimalScalarWhereWithAggregatesInput.schema';
import { AnimalScalarFieldEnumSchema } from './enums/AnimalScalarFieldEnum.schema';

export const AnimalGroupBySchema = z.object({
  where: AnimalWhereInputObjectSchema.optional(),
  orderBy: AnimalOrderByWithAggregationInputObjectSchema,
  having: AnimalScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AnimalScalarFieldEnumSchema),
});
