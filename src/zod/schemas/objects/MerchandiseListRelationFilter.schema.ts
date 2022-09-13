import { z } from 'zod';
import { MerchandiseWhereInputObjectSchema } from './MerchandiseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseListRelationFilter> = z
  .object({
    every: z.lazy(() => MerchandiseWhereInputObjectSchema).optional(),
    some: z.lazy(() => MerchandiseWhereInputObjectSchema).optional(),
    none: z.lazy(() => MerchandiseWhereInputObjectSchema).optional(),
  })
  .strict();

export const MerchandiseListRelationFilterObjectSchema = Schema;
