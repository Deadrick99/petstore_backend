import { z } from 'zod';
import { EmployeeWhereInputObjectSchema } from './EmployeeWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeRelationFilter> = z
  .object({
    is: z
      .lazy(() => EmployeeWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => EmployeeWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const EmployeeRelationFilterObjectSchema = Schema;
