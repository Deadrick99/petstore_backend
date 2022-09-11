import { z } from 'zod';
import { cityWhereInputObjectSchema } from './objects/cityWhereInput.schema';
import { cityOrderByWithRelationInputObjectSchema } from './objects/cityOrderByWithRelationInput.schema';
import { cityWhereUniqueInputObjectSchema } from './objects/cityWhereUniqueInput.schema';

export const cityAggregateSchema = z.object({
  where: cityWhereInputObjectSchema.optional(),
  orderBy: cityOrderByWithRelationInputObjectSchema.optional(),
  cursor: cityWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
