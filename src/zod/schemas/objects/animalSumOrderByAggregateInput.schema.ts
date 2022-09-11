import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalSumOrderByAggregateInput> = z
  .object({
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    LISTPRICE: z.lazy(() => SortOrderSchema).optional(),
    IMAGEHEIGHT: z.lazy(() => SortOrderSchema).optional(),
    IMAGEWIDTH: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const animalSumOrderByAggregateInputObjectSchema = Schema;
