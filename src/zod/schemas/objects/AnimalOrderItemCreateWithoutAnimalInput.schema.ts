import { z } from 'zod';
import { AnimalOrderCreateNestedOneWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderCreateNestedOneWithoutAnimalOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemCreateWithoutAnimalInput> = z
  .object({
    COST: z.number().optional().nullable(),
    AnimalOrder: z
      .lazy(
        () => AnimalOrderCreateNestedOneWithoutAnimalOrderItemInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnimalOrderItemCreateWithoutAnimalInputObjectSchema = Schema;
