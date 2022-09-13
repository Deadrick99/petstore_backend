import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MerchandiseCountOrderByAggregateInputObjectSchema } from './MerchandiseCountOrderByAggregateInput.schema';
import { MerchandiseAvgOrderByAggregateInputObjectSchema } from './MerchandiseAvgOrderByAggregateInput.schema';
import { MerchandiseMaxOrderByAggregateInputObjectSchema } from './MerchandiseMaxOrderByAggregateInput.schema';
import { MerchandiseMinOrderByAggregateInputObjectSchema } from './MerchandiseMinOrderByAggregateInput.schema';
import { MerchandiseSumOrderByAggregateInputObjectSchema } from './MerchandiseSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderByWithAggregationInput> = z
  .object({
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    DESCRIPTION: z.lazy(() => SortOrderSchema).optional(),
    QUANTITYONHAND: z.lazy(() => SortOrderSchema).optional(),
    LISTPRICE: z.lazy(() => SortOrderSchema).optional(),
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => MerchandiseCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => MerchandiseAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => MerchandiseMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => MerchandiseMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => MerchandiseSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MerchandiseOrderByWithAggregationInputObjectSchema = Schema;
