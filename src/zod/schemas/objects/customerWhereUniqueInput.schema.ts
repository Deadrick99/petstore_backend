import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerWhereUniqueInput> = z
  .object({
    CUSTOMERID: z.number().optional(),
  })
  .strict();

export const customerWhereUniqueInputObjectSchema = Schema;
