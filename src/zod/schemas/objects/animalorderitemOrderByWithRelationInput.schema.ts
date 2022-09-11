import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { animalorderOrderByWithRelationInputObjectSchema } from './animalorderOrderByWithRelationInput.schema';
import { animalOrderByWithRelationInputObjectSchema } from './animalOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemOrderByWithRelationInput> = z
  .object({
    ORDERID: z.lazy(() => SortOrderSchema).optional(),
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    COST: z.lazy(() => SortOrderSchema).optional(),
    animalorder: z
      .lazy(() => animalorderOrderByWithRelationInputObjectSchema)
      .optional(),
    animal: z.lazy(() => animalOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const animalorderitemOrderByWithRelationInputObjectSchema = Schema;
