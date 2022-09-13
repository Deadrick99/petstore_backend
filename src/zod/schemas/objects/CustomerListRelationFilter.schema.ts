import { z } from 'zod';
import { CustomerWhereInputObjectSchema } from './CustomerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerListRelationFilter> = z
  .object({
    every: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
    some: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
    none: z.lazy(() => CustomerWhereInputObjectSchema).optional(),
  })
  .strict();

export const CustomerListRelationFilterObjectSchema = Schema;
