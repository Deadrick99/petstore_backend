import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryWhereUniqueInput> = z
  .object({
    CATEGORY: z.string().optional(),
  })
  .strict();

export const CategoryWhereUniqueInputObjectSchema = Schema;
