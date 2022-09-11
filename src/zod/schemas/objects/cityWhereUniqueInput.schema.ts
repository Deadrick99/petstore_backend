import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityWhereUniqueInput> = z
  .object({
    CITYID: z.number().optional(),
  })
  .strict();

export const cityWhereUniqueInputObjectSchema = Schema;
