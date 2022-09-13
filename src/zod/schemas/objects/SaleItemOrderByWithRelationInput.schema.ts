import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SaleOrderByWithRelationInputObjectSchema } from './SaleOrderByWithRelationInput.schema';
import { MerchandiseOrderByWithRelationInputObjectSchema } from './MerchandiseOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemOrderByWithRelationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    QUANTITY: z.lazy(() => SortOrderSchema).optional(),
    SALEPRICE: z.lazy(() => SortOrderSchema).optional(),
    Sale: z.lazy(() => SaleOrderByWithRelationInputObjectSchema).optional(),
    Merchandise: z
      .lazy(() => MerchandiseOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleItemOrderByWithRelationInputObjectSchema = Schema;
