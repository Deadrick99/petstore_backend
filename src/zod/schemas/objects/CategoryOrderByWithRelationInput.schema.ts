import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnimalOrderByRelationAggregateInputObjectSchema } from './AnimalOrderByRelationAggregateInput.schema';
import { BreedOrderByRelationAggregateInputObjectSchema } from './BreedOrderByRelationAggregateInput.schema';
import { MerchandiseOrderByRelationAggregateInputObjectSchema } from './MerchandiseOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryOrderByWithRelationInput> = z
  .object({
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    REGISTRATION: z.lazy(() => SortOrderSchema).optional(),
    Animal: z
      .lazy(() => AnimalOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Breed: z
      .lazy(() => BreedOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Merchandise: z
      .lazy(() => MerchandiseOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryOrderByWithRelationInputObjectSchema = Schema;
