import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { AnimalOrderUpdateOneRequiredWithoutAnimalOrderItemNestedInputObjectSchema } from './AnimalOrderUpdateOneRequiredWithoutAnimalOrderItemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUpdateWithoutAnimalInput> = z
  .object({
    COST: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    AnimalOrder: z
      .lazy(
        () =>
          AnimalOrderUpdateOneRequiredWithoutAnimalOrderItemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnimalOrderItemUpdateWithoutAnimalInputObjectSchema = Schema;
