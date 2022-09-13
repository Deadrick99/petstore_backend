import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerAccountWhereUniqueInput> = z
  .object({
    ACCOUNTID: z.number().optional(),
  })
  .strict();

export const CustomerAccountWhereUniqueInputObjectSchema = Schema;
