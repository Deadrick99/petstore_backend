import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { animalUncheckedUpdateManyWithoutBreedNestedInputObjectSchema } from './animalUncheckedUpdateManyWithoutBreedNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedUncheckedUpdateInput> = z
  .object({
    CATEGORY: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    BREED: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    animal: z
      .lazy(() => animalUncheckedUpdateManyWithoutBreedNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const breedUncheckedUpdateInputObjectSchema = Schema;
