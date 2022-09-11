import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.preferencesWhereUniqueInput> = z
  .object({
    KEYID: z.string().optional(),
  })
  .strict();

export const preferencesWhereUniqueInputObjectSchema = Schema;
