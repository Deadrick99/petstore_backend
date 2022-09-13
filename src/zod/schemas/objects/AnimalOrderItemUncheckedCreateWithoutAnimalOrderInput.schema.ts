import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUncheckedCreateWithoutAnimalOrderInput> =
  z
    .object({
      ANIMALID: z.number().optional(),
      COST: z.number().optional().nullable(),
    })
    .strict();

export const AnimalOrderItemUncheckedCreateWithoutAnimalOrderInputObjectSchema =
  Schema;
