import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityWhereUniqueInput> = z
  .object({
    CITYID: z.number().optional(),
  })
  .strict();

export const CityWhereUniqueInputObjectSchema = Schema;
