import { z } from 'zod';
import { merchandiseorderWhereInputObjectSchema } from './merchandiseorderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseorderRelationFilter> = z
  .object({
    is: z.lazy(() => merchandiseorderWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => merchandiseorderWhereInputObjectSchema).optional(),
  })
  .strict();

export const MerchandiseorderRelationFilterObjectSchema = Schema;
