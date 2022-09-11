import { z } from 'zod';
import { breedWhereInputObjectSchema } from './objects/breedWhereInput.schema';
import { breedOrderByWithAggregationInputObjectSchema } from './objects/breedOrderByWithAggregationInput.schema';
import { breedScalarWhereWithAggregatesInputObjectSchema } from './objects/breedScalarWhereWithAggregatesInput.schema';
import { breedScalarFieldEnumSchema } from './enums/breedScalarFieldEnum.schema';

export const breedGroupBySchema = z.object({
  where: breedWhereInputObjectSchema.optional(),
  orderBy: breedOrderByWithAggregationInputObjectSchema,
  having: breedScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(breedScalarFieldEnumSchema),
});
