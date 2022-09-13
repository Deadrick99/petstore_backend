import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnimalCountOrderByAggregateInputObjectSchema } from './AnimalCountOrderByAggregateInput.schema';
import { AnimalAvgOrderByAggregateInputObjectSchema } from './AnimalAvgOrderByAggregateInput.schema';
import { AnimalMaxOrderByAggregateInputObjectSchema } from './AnimalMaxOrderByAggregateInput.schema';
import { AnimalMinOrderByAggregateInputObjectSchema } from './AnimalMinOrderByAggregateInput.schema';
import { AnimalSumOrderByAggregateInputObjectSchema } from './AnimalSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderByWithAggregationInput> = z
  .object({
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    NAME: z.lazy(() => SortOrderSchema).optional(),
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    BREED: z.lazy(() => SortOrderSchema).optional(),
    DATEBORN: z.lazy(() => SortOrderSchema).optional(),
    GENDER: z.lazy(() => SortOrderSchema).optional(),
    REGISTERED: z.lazy(() => SortOrderSchema).optional(),
    COLOR: z.lazy(() => SortOrderSchema).optional(),
    LISTPRICE: z.lazy(() => SortOrderSchema).optional(),
    PHOTO: z.lazy(() => SortOrderSchema).optional(),
    IMAGEFILE: z.lazy(() => SortOrderSchema).optional(),
    IMAGEHEIGHT: z.lazy(() => SortOrderSchema).optional(),
    IMAGEWIDTH: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => AnimalCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => AnimalAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => AnimalMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AnimalMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => AnimalSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const AnimalOrderByWithAggregationInputObjectSchema = Schema;
