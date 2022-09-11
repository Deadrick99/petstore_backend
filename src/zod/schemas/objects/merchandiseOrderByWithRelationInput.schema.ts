import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { categoryOrderByWithRelationInputObjectSchema } from './categoryOrderByWithRelationInput.schema';
import { orderitemOrderByRelationAggregateInputObjectSchema } from './orderitemOrderByRelationAggregateInput.schema';
import { saleitemOrderByRelationAggregateInputObjectSchema } from './saleitemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseOrderByWithRelationInput> = z
  .object({
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    DESCRIPTION: z.lazy(() => SortOrderSchema).optional(),
    QUANTITYONHAND: z.lazy(() => SortOrderSchema).optional(),
    LISTPRICE: z.lazy(() => SortOrderSchema).optional(),
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    category: z
      .lazy(() => categoryOrderByWithRelationInputObjectSchema)
      .optional(),
    orderitem: z
      .lazy(() => orderitemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    saleitem: z
      .lazy(() => saleitemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const merchandiseOrderByWithRelationInputObjectSchema = Schema;
