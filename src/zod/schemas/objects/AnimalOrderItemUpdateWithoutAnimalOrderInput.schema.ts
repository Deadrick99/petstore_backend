import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { AnimalUpdateOneRequiredWithoutAnimalOrderItemNestedInputObjectSchema } from './AnimalUpdateOneRequiredWithoutAnimalOrderItemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUpdateWithoutAnimalOrderInput> = z
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
  })
  .strict();

export const AnimalOrderItemUpdateWithoutAnimalOrderInputObjectSchema = Schema;
