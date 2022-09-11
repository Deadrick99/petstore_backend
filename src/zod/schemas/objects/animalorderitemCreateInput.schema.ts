import { z } from 'zod';
import { animalorderCreateNestedOneWithoutAnimalorderitemInputObjectSchema } from './animalorderCreateNestedOneWithoutAnimalorderitemInput.schema';
import { animalCreateNestedOneWithoutAnimalorderitemInputObjectSchema } from './animalCreateNestedOneWithoutAnimalorderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemCreateInput> = z
  .object({
    COST: z.number().optional().nullable(),
    animalorder: z
      .lazy(
        () => animalorderCreateNestedOneWithoutAnimalorderitemInputObjectSchema,
      )
      .optional(),
    animal: z
      .lazy(() => animalCreateNestedOneWithoutAnimalorderitemInputObjectSchema)
      .optional(),
  })
  .strict();

export const animalorderitemCreateInputObjectSchema = Schema;
