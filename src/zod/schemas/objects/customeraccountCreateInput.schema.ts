import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customeraccountCreateInput> = z
  .object({
    ACCOUNTID: z.number(),
    CUSTOMERID: z.number().optional().nullable(),
    BALANCE: z.number().optional().nullable(),
  })
  .strict();

export const customeraccountCreateInputObjectSchema = Schema;
