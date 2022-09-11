import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderWhereUniqueInput> = z
  .object({
    PONUMBER: z.number().optional(),
  })
  .strict();

export const merchandiseorderWhereUniqueInputObjectSchema = Schema;
