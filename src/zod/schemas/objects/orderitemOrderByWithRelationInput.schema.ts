import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { merchandiseorderOrderByWithRelationInputObjectSchema } from './merchandiseorderOrderByWithRelationInput.schema';
import { merchandiseOrderByWithRelationInputObjectSchema } from './merchandiseOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemOrderByWithRelationInput> = z
  .object({
    PONUMBER: z.lazy(() => SortOrderSchema).optional(),
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    QUANTITY: z.lazy(() => SortOrderSchema).optional(),
    COST: z.lazy(() => SortOrderSchema).optional(),
    merchandiseorder: z
      .lazy(() => merchandiseorderOrderByWithRelationInputObjectSchema)
      .optional(),
    merchandise: z
      .lazy(() => merchandiseOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const orderitemOrderByWithRelationInputObjectSchema = Schema;
