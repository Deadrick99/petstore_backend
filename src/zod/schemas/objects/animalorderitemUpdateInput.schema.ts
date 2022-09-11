import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { animalorderUpdateOneRequiredWithoutAnimalorderitemNestedInputObjectSchema } from './animalorderUpdateOneRequiredWithoutAnimalorderitemNestedInput.schema';
import { animalUpdateOneRequiredWithoutAnimalorderitemNestedInputObjectSchema } from './animalUpdateOneRequiredWithoutAnimalorderitemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemUpdateInput> = z
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
    animal: z
      .lazy(
        () =>
          animalUpdateOneRequiredWithoutAnimalorderitemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const animalorderitemUpdateInputObjectSchema = Schema;
