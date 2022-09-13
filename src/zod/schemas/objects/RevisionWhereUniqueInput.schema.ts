import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RevisionWhereUniqueInput> = z
  .object({
    REVISIONID: z.number().optional(),
  })
  .strict();

export const RevisionWhereUniqueInputObjectSchema = Schema;
