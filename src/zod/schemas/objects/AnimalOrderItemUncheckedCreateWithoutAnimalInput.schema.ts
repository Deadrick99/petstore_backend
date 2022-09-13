import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUncheckedCreateWithoutAnimalInput> =
  z
    .object({
      ORDERID: z.number().optional(),
      COST: z.number().optional().nullable(),
    })
    .strict();

export const AnimalOrderItemUncheckedCreateWithoutAnimalInputObjectSchema =
  Schema;
