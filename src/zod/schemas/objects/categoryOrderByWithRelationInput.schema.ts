import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { animalOrderByRelationAggregateInputObjectSchema } from './animalOrderByRelationAggregateInput.schema';
import { breedOrderByRelationAggregateInputObjectSchema } from './breedOrderByRelationAggregateInput.schema';
import { merchandiseOrderByRelationAggregateInputObjectSchema } from './merchandiseOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryOrderByWithRelationInput> = z
  .object({
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    REGISTRATION: z.lazy(() => SortOrderSchema).optional(),
    animal: z
      .lazy(() => animalOrderByRelationAggregateInputObjectSchema)
      .optional(),
    breed: z
      .lazy(() => breedOrderByRelationAggregateInputObjectSchema)
      .optional(),
    merchandise: z
      .lazy(() => merchandiseOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const categoryOrderByWithRelationInputObjectSchema = Schema;
