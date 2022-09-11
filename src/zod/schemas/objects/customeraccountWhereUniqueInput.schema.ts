import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customeraccountWhereUniqueInput> = z
  .object({
    ACCOUNTID: z.number().optional(),
  })
  .strict();

export const customeraccountWhereUniqueInputObjectSchema = Schema;
