import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RevisionUncheckedCreateInput> = z
  .object({
    REVISIONID: z.number().optional(),
    VERSION: z.string().optional().nullable(),
    DESCRIPTION: z.string().optional().nullable(),
    AUTHOR: z.string().optional().nullable(),
    RELEASEDATE: z.date().optional().nullable(),
  })
  .strict();

export const RevisionUncheckedCreateInputObjectSchema = Schema;
