import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { animalorderUpdateOneRequiredWithoutAnimalorderitemNestedInputObjectSchema } from './animalorderUpdateOneRequiredWithoutAnimalorderitemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemUpdateWithoutAnimalInput> = z
  .object({
    COST: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    animalorder: z
      .lazy(
        () =>
          animalorderUpdateOneRequiredWithoutAnimalorderitemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const animalorderitemUpdateWithoutAnimalInputObjectSchema = Schema;
