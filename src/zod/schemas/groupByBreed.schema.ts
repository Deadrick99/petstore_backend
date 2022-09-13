import { z } from 'zod';
import { BreedWhereInputObjectSchema } from './objects/BreedWhereInput.schema';
import { BreedOrderByWithAggregationInputObjectSchema } from './objects/BreedOrderByWithAggregationInput.schema';
import { BreedScalarWhereWithAggregatesInputObjectSchema } from './objects/BreedScalarWhereWithAggregatesInput.schema';
import { BreedScalarFieldEnumSchema } from './enums/BreedScalarFieldEnum.schema';

export const BreedGroupBySchema = z.object({
  where: BreedWhereInputObjectSchema.optional(),
  orderBy: BreedOrderByWithAggregationInputObjectSchema,
  having: BreedScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(BreedScalarFieldEnumSchema),
});
