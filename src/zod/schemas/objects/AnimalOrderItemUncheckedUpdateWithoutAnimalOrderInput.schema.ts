import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUncheckedUpdateWithoutAnimalOrderInput> =
  z
    .object({
      ANIMALID: z
        .union([
          z.number(),
          z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      COST: z
        .union([
          z.number(),
          z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const AnimalOrderItemUncheckedUpdateWithoutAnimalOrderInputObjectSchema =
  Schema;
