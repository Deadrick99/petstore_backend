import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.revisionWhereUniqueInput> = z
  .object({
    REVISIONID: z.number().optional(),
  })
  .strict();

export const revisionWhereUniqueInputObjectSchema = Schema;
