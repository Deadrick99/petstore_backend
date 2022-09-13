import { z } from 'zod';
import { AnimalCreateNestedOneWithoutAnimalOrderItemInputObjectSchema } from './AnimalCreateNestedOneWithoutAnimalOrderItemInput.schema';
import { AnimalOrderCreateNestedOneWithoutAnimalOrderItemInputObjectSchema } from './AnimalOrderCreateNestedOneWithoutAnimalOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemCreateInput> = z
  .object({
    COST: z.number().optional().nullable(),
    Animal: z
      .lazy(() => AnimalCreateNestedOneWithoutAnimalOrderItemInputObjectSchema)
      .optional(),
    AnimalOrder: z
      .lazy(
        () => AnimalOrderCreateNestedOneWithoutAnimalOrderItemInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnimalOrderItemCreateInputObjectSchema = Schema;
