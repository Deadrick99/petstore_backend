import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerAccountCreateInput> = z
  .object({
    CUSTOMERID: z.number().optional().nullable(),
    BALANCE: z.number().optional().nullable(),
  })
  .strict();

export const CustomerAccountCreateInputObjectSchema = Schema;
