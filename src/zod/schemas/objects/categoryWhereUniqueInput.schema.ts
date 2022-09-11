import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryWhereUniqueInput> = z
  .object({
    CATEGORY: z.string().optional(),
  })
  .strict();

export const categoryWhereUniqueInputObjectSchema = Schema;
