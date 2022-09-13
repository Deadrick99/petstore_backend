import { z } from 'zod';
import { SaleItemWhereInputObjectSchema } from './SaleItemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemListRelationFilter> = z
  .object({
    every: z.lazy(() => SaleItemWhereInputObjectSchema).optional(),
    some: z.lazy(() => SaleItemWhereInputObjectSchema).optional(),
    none: z.lazy(() => SaleItemWhereInputObjectSchema).optional(),
  })
  .strict();

export const SaleItemListRelationFilterObjectSchema = Schema;
