import { z } from 'zod';
import { BreedWhereInputObjectSchema } from './objects/BreedWhereInput.schema';
import { BreedOrderByWithRelationInputObjectSchema } from './objects/BreedOrderByWithRelationInput.schema';
import { BreedWhereUniqueInputObjectSchema } from './objects/BreedWhereUniqueInput.schema';

export const BreedAggregateSchema = z.object({
  where: BreedWhereInputObjectSchema.optional(),
  orderBy: BreedOrderByWithRelationInputObjectSchema.optional(),
  cursor: BreedWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
