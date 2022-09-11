import { z } from 'zod';
import { employeeWhereInputObjectSchema } from './employeeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeRelationFilter> = z
  .object({
    is: z
      .lazy(() => employeeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => employeeWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const EmployeeRelationFilterObjectSchema = Schema;
