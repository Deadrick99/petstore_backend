import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { animalCountOrderByAggregateInputObjectSchema } from './animalCountOrderByAggregateInput.schema';
import { animalAvgOrderByAggregateInputObjectSchema } from './animalAvgOrderByAggregateInput.schema';
import { animalMaxOrderByAggregateInputObjectSchema } from './animalMaxOrderByAggregateInput.schema';
import { animalMinOrderByAggregateInputObjectSchema } from './animalMinOrderByAggregateInput.schema';
import { animalSumOrderByAggregateInputObjectSchema } from './animalSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalOrderByWithAggregationInput> = z
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
      .lazy(() => animalCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => animalAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => animalMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => animalMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => animalSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const animalOrderByWithAggregationInputObjectSchema = Schema;
