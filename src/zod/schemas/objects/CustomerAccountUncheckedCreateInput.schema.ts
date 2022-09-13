import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerAccountUncheckedCreateInput> = z
  .object({
    ACCOUNTID: z.number().optional(),
    CUSTOMERID: z.number().optional().nullable(),
    BALANCE: z.number().optional().nullable(),
  })
  .strict();

export const CustomerAccountUncheckedCreateInputObjectSchema = Schema;
