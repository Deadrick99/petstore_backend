import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { animalUpdateOneRequiredWithoutAnimalorderitemNestedInputObjectSchema } from './animalUpdateOneRequiredWithoutAnimalorderitemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemUpdateWithoutAnimalorderInput> = z
  .object({
    COST: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    animal: z
      .lazy(
        () =>
          animalUpdateOneRequiredWithoutAnimalorderitemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const animalorderitemUpdateWithoutAnimalorderInputObjectSchema = Schema;
