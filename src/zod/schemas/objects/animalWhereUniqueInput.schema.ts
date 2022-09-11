import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalWhereUniqueInput> = z
  .object({
    ANIMALID: z.number().optional(),
  })
  .strict();

export const animalWhereUniqueInputObjectSchema = Schema;
