import { z } from 'zod';
import { EmployeeWhereInputObjectSchema } from './EmployeeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeListRelationFilter> = z
  .object({
    every: z.lazy(() => EmployeeWhereInputObjectSchema).optional(),
    some: z.lazy(() => EmployeeWhereInputObjectSchema).optional(),
    none: z.lazy(() => EmployeeWhereInputObjectSchema).optional(),
  })
  .strict();

export const EmployeeListRelationFilterObjectSchema = Schema;
