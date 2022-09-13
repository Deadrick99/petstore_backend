import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnimalOrderByWithRelationInputObjectSchema } from './AnimalOrderByWithRelationInput.schema';
import { AnimalOrderOrderByWithRelationInputObjectSchema } from './AnimalOrderOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemOrderByWithRelationInput> = z
  .object({
    ORDERID: z.lazy(() => SortOrderSchema).optional(),
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    COST: z.lazy(() => SortOrderSchema).optional(),
    Animal: z.lazy(() => AnimalOrderByWithRelationInputObjectSchema).optional(),
    AnimalOrder: z
      .lazy(() => AnimalOrderOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnimalOrderItemOrderByWithRelationInputObjectSchema = Schema;
