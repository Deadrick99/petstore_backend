import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUncheckedCreateInput> = z
  .object({
    ORDERID: z.number().optional(),
    ANIMALID: z.number().optional(),
    COST: z.number().optional().nullable(),
  })
  .strict();

export const AnimalOrderItemUncheckedCreateInputObjectSchema = Schema;
