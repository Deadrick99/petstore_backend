import { z } from 'zod';
import { animalorderitemWhereInputObjectSchema } from './objects/animalorderitemWhereInput.schema';
import { animalorderitemOrderByWithAggregationInputObjectSchema } from './objects/animalorderitemOrderByWithAggregationInput.schema';
import { animalorderitemScalarWhereWithAggregatesInputObjectSchema } from './objects/animalorderitemScalarWhereWithAggregatesInput.schema';
import { animalorderitemScalarFieldEnumSchema } from './enums/animalorderitemScalarFieldEnum.schema';

export const animalorderitemGroupBySchema = z.object({
  where: animalorderitemWhereInputObjectSchema.optional(),
  orderBy: animalorderitemOrderByWithAggregationInputObjectSchema,
  having: animalorderitemScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(animalorderitemScalarFieldEnumSchema),
});
