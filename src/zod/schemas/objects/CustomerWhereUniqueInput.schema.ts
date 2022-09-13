import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerWhereUniqueInput> = z
  .object({
    CUSTOMERID: z.number().optional(),
  })
  .strict();

export const CustomerWhereUniqueInputObjectSchema = Schema;
