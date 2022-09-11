import { z } from 'zod';
import { animalWhereInputObjectSchema } from './objects/animalWhereInput.schema';
import { animalOrderByWithAggregationInputObjectSchema } from './objects/animalOrderByWithAggregationInput.schema';
import { animalScalarWhereWithAggregatesInputObjectSchema } from './objects/animalScalarWhereWithAggregatesInput.schema';
import { animalScalarFieldEnumSchema } from './enums/animalScalarFieldEnum.schema';

export const animalGroupBySchema = z.object({
  where: animalWhereInputObjectSchema.optional(),
  orderBy: animalOrderByWithAggregationInputObjectSchema,
  having: animalScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(animalScalarFieldEnumSchema),
});
