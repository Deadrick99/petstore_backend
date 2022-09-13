import { z } from 'zod';
import { AnimalOrderWhereInputObjectSchema } from './objects/AnimalOrderWhereInput.schema';
import { AnimalOrderOrderByWithAggregationInputObjectSchema } from './objects/AnimalOrderOrderByWithAggregationInput.schema';
import { AnimalOrderScalarWhereWithAggregatesInputObjectSchema } from './objects/AnimalOrderScalarWhereWithAggregatesInput.schema';
import { AnimalOrderScalarFieldEnumSchema } from './enums/AnimalOrderScalarFieldEnum.schema';

export const AnimalOrderGroupBySchema = z.object({
  where: AnimalOrderWhereInputObjectSchema.optional(),
  orderBy: AnimalOrderOrderByWithAggregationInputObjectSchema,
  having: AnimalOrderScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(AnimalOrderScalarFieldEnumSchema),
});
