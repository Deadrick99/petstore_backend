import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SaleAnimalCountOrderByAggregateInputObjectSchema } from './SaleAnimalCountOrderByAggregateInput.schema';
import { SaleAnimalAvgOrderByAggregateInputObjectSchema } from './SaleAnimalAvgOrderByAggregateInput.schema';
import { SaleAnimalMaxOrderByAggregateInputObjectSchema } from './SaleAnimalMaxOrderByAggregateInput.schema';
import { SaleAnimalMinOrderByAggregateInputObjectSchema } from './SaleAnimalMinOrderByAggregateInput.schema';
import { SaleAnimalSumOrderByAggregateInputObjectSchema } from './SaleAnimalSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalOrderByWithAggregationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    SALEPRICE: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => SaleAnimalCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => SaleAnimalAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => SaleAnimalMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => SaleAnimalMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => SaleAnimalSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleAnimalOrderByWithAggregationInputObjectSchema = Schema;
