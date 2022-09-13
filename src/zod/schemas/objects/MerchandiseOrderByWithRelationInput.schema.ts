import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CategoryOrderByWithRelationInputObjectSchema } from './CategoryOrderByWithRelationInput.schema';
import { OrderItemOrderByRelationAggregateInputObjectSchema } from './OrderItemOrderByRelationAggregateInput.schema';
import { SaleItemOrderByRelationAggregateInputObjectSchema } from './SaleItemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderByWithRelationInput> = z
  .object({
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    DESCRIPTION: z.lazy(() => SortOrderSchema).optional(),
    QUANTITYONHAND: z.lazy(() => SortOrderSchema).optional(),
    LISTPRICE: z.lazy(() => SortOrderSchema).optional(),
    CATEGORY: z.lazy(() => SortOrderSchema).optional(),
    Category: z
      .lazy(() => CategoryOrderByWithRelationInputObjectSchema)
      .optional(),
    OrderItem: z
      .lazy(() => OrderItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
    SaleItem: z
      .lazy(() => SaleItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MerchandiseOrderByWithRelationInputObjectSchema = Schema;
