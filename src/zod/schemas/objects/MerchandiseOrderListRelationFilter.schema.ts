import { z } from 'zod';
import { MerchandiseOrderWhereInputObjectSchema } from './MerchandiseOrderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderListRelationFilter> = z
  .object({
    every: z.lazy(() => MerchandiseOrderWhereInputObjectSchema).optional(),
    some: z.lazy(() => MerchandiseOrderWhereInputObjectSchema).optional(),
    none: z.lazy(() => MerchandiseOrderWhereInputObjectSchema).optional(),
  })
  .strict();

export const MerchandiseOrderListRelationFilterObjectSchema = Schema;
