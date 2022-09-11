import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { saleOrderByWithRelationInputObjectSchema } from './saleOrderByWithRelationInput.schema';
import { animalOrderByWithRelationInputObjectSchema } from './animalOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalOrderByWithRelationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    SALEPRICE: z.lazy(() => SortOrderSchema).optional(),
    sale: z.lazy(() => saleOrderByWithRelationInputObjectSchema).optional(),
    animal: z.lazy(() => animalOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const saleanimalOrderByWithRelationInputObjectSchema = Schema;
