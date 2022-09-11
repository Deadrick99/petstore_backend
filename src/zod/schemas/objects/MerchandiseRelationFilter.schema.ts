import { z } from 'zod';
import { merchandiseWhereInputObjectSchema } from './merchandiseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseRelationFilter> = z
  .object({
    is: z.lazy(() => merchandiseWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => merchandiseWhereInputObjectSchema).optional(),
  })
  .strict();

export const MerchandiseRelationFilterObjectSchema = Schema;
