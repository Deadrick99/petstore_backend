import { z } from 'zod';
import { employeeWhereInputObjectSchema } from './employeeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeListRelationFilter> = z
  .object({
    every: z.lazy(() => employeeWhereInputObjectSchema).optional(),
    some: z.lazy(() => employeeWhereInputObjectSchema).optional(),
    none: z.lazy(() => employeeWhereInputObjectSchema).optional(),
  })
  .strict();

export const EmployeeListRelationFilterObjectSchema = Schema;
