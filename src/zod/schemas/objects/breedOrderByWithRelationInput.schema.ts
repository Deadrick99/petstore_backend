import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { categoryOrderByWithRelationInputObjectSchema } from './categoryOrderByWithRelationInput.schema';
import { animalOrderByRelationAggregateInputObjectSchema } from './animalOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedOrderByWithRelationInput> = z
  .object({
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    BREED: z.lazy(() => SortOrderSchema).optional(),
    category: z
      .lazy(() => categoryOrderByWithRelationInputObjectSchema)
      .optional(),
    animal: z
      .lazy(() => animalOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const breedOrderByWithRelationInputObjectSchema = Schema;
