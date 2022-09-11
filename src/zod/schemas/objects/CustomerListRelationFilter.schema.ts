import { z } from 'zod';
import { customerWhereInputObjectSchema } from './customerWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerListRelationFilter> = z
  .object({
    every: z.lazy(() => customerWhereInputObjectSchema).optional(),
    some: z.lazy(() => customerWhereInputObjectSchema).optional(),
    none: z.lazy(() => customerWhereInputObjectSchema).optional(),
  })
  .strict();

export const CustomerListRelationFilterObjectSchema = Schema;
