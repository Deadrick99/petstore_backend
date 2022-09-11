import { z } from 'zod';
import { animalCreateNestedOneWithoutAnimalorderitemInputObjectSchema } from './animalCreateNestedOneWithoutAnimalorderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemCreateWithoutAnimalorderInput> = z
  .object({
    COST: z.number().optional().nullable(),
    animal: z
      .lazy(() => animalCreateNestedOneWithoutAnimalorderitemInputObjectSchema)
      .optional(),
  })
  .strict();

export const animalorderitemCreateWithoutAnimalorderInputObjectSchema = Schema;
