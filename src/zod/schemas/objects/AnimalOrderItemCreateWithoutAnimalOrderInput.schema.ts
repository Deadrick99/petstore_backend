import { z } from 'zod';
import { AnimalCreateNestedOneWithoutAnimalOrderItemInputObjectSchema } from './AnimalCreateNestedOneWithoutAnimalOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemCreateWithoutAnimalOrderInput> = z
  .object({
    COST: z.number().optional().nullable(),
    Animal: z
      .lazy(() => AnimalCreateNestedOneWithoutAnimalOrderItemInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnimalOrderItemCreateWithoutAnimalOrderInputObjectSchema = Schema;
