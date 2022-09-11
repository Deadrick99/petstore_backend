import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseWhereUniqueInput> = z
  .object({
    ITEMID: z.number().optional(),
  })
  .strict();

export const merchandiseWhereUniqueInputObjectSchema = Schema;
