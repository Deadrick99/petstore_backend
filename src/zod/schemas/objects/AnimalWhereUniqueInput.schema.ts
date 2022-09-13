import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalWhereUniqueInput> = z
  .object({
    ANIMALID: z.number().optional(),
  })
  .strict();

export const AnimalWhereUniqueInputObjectSchema = Schema;
