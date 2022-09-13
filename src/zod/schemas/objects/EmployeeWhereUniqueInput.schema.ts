import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeWhereUniqueInput> = z
  .object({
    EMPLOYEEID: z.number().optional(),
  })
  .strict();

export const EmployeeWhereUniqueInputObjectSchema = Schema;
