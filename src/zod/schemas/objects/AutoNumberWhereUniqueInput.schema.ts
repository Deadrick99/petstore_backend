import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AutoNumberWhereUniqueInput> = z
  .object({
    TABLENAME: z.string().optional(),
  })
  .strict();

export const AutoNumberWhereUniqueInputObjectSchema = Schema;
