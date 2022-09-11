import { z } from 'zod';
import { breedWhereInputObjectSchema } from './objects/breedWhereInput.schema';
import { breedOrderByWithRelationInputObjectSchema } from './objects/breedOrderByWithRelationInput.schema';
import { breedWhereUniqueInputObjectSchema } from './objects/breedWhereUniqueInput.schema';

export const breedAggregateSchema = z.object({
  where: breedWhereInputObjectSchema.optional(),
  orderBy: breedOrderByWithRelationInputObjectSchema.optional(),
  cursor: breedWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
