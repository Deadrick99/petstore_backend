import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { AnimalUpdateOneRequiredWithoutAnimalOrderItemNestedInputObjectSchema } from './AnimalUpdateOneRequiredWithoutAnimalOrderItemNestedInput.schema';
import { AnimalOrderUpdateOneRequiredWithoutAnimalOrderItemNestedInputObjectSchema } from './AnimalOrderUpdateOneRequiredWithoutAnimalOrderItemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUpdateInput> = z
  .object({
    COST: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Animal: z
      .lazy(
        () =>
          AnimalUpdateOneRequiredWithoutAnimalOrderItemNestedInputObjectSchema,
      )
      .optional(),
    AnimalOrder: z
      .lazy(
        () =>
          AnimalOrderUpdateOneRequiredWithoutAnimalOrderItemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnimalOrderItemUpdateInputObjectSchema = Schema;
