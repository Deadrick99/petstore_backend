import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { MerchandiseOrderByWithRelationInputObjectSchema } from './MerchandiseOrderByWithRelationInput.schema';
import { MerchandiseOrderOrderByWithRelationInputObjectSchema } from './MerchandiseOrderOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemOrderByWithRelationInput> = z
  .object({
    PONUMBER: z.lazy(() => SortOrderSchema).optional(),
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    QUANTITY: z.lazy(() => SortOrderSchema).optional(),
    COST: z.lazy(() => SortOrderSchema).optional(),
    Merchandise: z
      .lazy(() => MerchandiseOrderByWithRelationInputObjectSchema)
      .optional(),
    MerchandiseOrder: z
      .lazy(() => MerchandiseOrderOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrderItemOrderByWithRelationInputObjectSchema = Schema;
