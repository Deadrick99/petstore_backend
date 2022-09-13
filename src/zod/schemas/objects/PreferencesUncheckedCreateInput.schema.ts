import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PreferencesUncheckedCreateInput> = z
  .object({
    KEYID: z.string(),
    VALUE: z.string().optional().nullable(),
    DESCRIPTION: z.string().optional().nullable(),
  })
  .strict();

export const PreferencesUncheckedCreateInputObjectSchema = Schema;
