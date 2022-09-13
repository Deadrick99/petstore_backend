import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { AnimalOrderByRelationAggregateInputObjectSchema } from './AnimalOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedOrderByWithRelationInput> = z
  .object({
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    BREED: z.lazy(() => SortOrderSchema).optional(),
    Category: z
      .lazy(() => CategoryOrderByWithRelationInputObjectSchema)
      .optional(),
    Animal: z
      .lazy(() => AnimalOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const BreedOrderByWithRelationInputObjectSchema = Schema;
