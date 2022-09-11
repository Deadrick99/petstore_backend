import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderWhereUniqueInput> = z
  .object({
    ORDERID: z.number().optional(),
  })
  .strict();

export const animalorderWhereUniqueInputObjectSchema = Schema;
