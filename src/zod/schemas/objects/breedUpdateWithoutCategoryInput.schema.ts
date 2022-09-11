import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { animalUpdateManyWithoutBreedNestedInputObjectSchema } from './animalUpdateManyWithoutBreedNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedUpdateWithoutCategoryInput> = z
  .object({
    BREED: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    animal: z
      .lazy(() => animalUpdateManyWithoutBreedNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const breedUpdateWithoutCategoryInputObjectSchema = Schema;
