import { z } from 'zod';
import { animalorderCreateNestedOneWithoutAnimalorderitemInputObjectSchema } from './animalorderCreateNestedOneWithoutAnimalorderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemCreateWithoutAnimalInput> = z
  .object({
    COST: z.number().optional().nullable(),
    animalorder: z
      .lazy(
        () => animalorderCreateNestedOneWithoutAnimalorderitemInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const animalorderitemCreateWithoutAnimalInputObjectSchema = Schema;
