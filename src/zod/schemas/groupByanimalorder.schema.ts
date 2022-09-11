import { z } from 'zod';
import { animalorderWhereInputObjectSchema } from './objects/animalorderWhereInput.schema';
import { animalorderOrderByWithAggregationInputObjectSchema } from './objects/animalorderOrderByWithAggregationInput.schema';
import { animalorderScalarWhereWithAggregatesInputObjectSchema } from './objects/animalorderScalarWhereWithAggregatesInput.schema';
import { animalorderScalarFieldEnumSchema } from './enums/animalorderScalarFieldEnum.schema';

export const animalorderGroupBySchema = z.object({
  where: animalorderWhereInputObjectSchema.optional(),
  orderBy: animalorderOrderByWithAggregationInputObjectSchema,
  having: animalorderScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(animalorderScalarFieldEnumSchema),
});
