import { z } from 'zod';
import { SaleAnimalWhereInputObjectSchema } from './objects/SaleAnimalWhereInput.schema';
import { SaleAnimalOrderByWithAggregationInputObjectSchema } from './objects/SaleAnimalOrderByWithAggregationInput.schema';
import { SaleAnimalScalarWhereWithAggregatesInputObjectSchema } from './objects/SaleAnimalScalarWhereWithAggregatesInput.schema';
import { SaleAnimalScalarFieldEnumSchema } from './enums/SaleAnimalScalarFieldEnum.schema';

export const SaleAnimalGroupBySchema = z.object({
  where: SaleAnimalWhereInputObjectSchema.optional(),
  orderBy: SaleAnimalOrderByWithAggregationInputObjectSchema,
  having: SaleAnimalScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(SaleAnimalScalarFieldEnumSchema),
});
