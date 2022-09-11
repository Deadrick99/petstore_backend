import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { saleOrderByWithRelationInputObjectSchema } from './saleOrderByWithRelationInput.schema';
import { merchandiseOrderByWithRelationInputObjectSchema } from './merchandiseOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemOrderByWithRelationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    ITEMID: z.lazy(() => SortOrderSchema).optional(),
    QUANTITY: z.lazy(() => SortOrderSchema).optional(),
    SALEPRICE: z.lazy(() => SortOrderSchema).optional(),
    sale: z.lazy(() => saleOrderByWithRelationInputObjectSchema).optional(),
    merchandise: z
      .lazy(() => merchandiseOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleitemOrderByWithRelationInputObjectSchema = Schema;
