import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.autonumberUncheckedCreateInput> = z
  .object({
    TABLENAME: z.string(),
    KEYVALUE: z.number().optional().nullable(),
    KEYINCREMENT: z.number().optional().nullable(),
  })
  .strict();

export const autonumberUncheckedCreateInputObjectSchema = Schema;
