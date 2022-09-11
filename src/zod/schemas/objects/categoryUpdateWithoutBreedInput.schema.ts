import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { animalUpdateManyWithoutCategoryNestedInputObjectSchema } from './animalUpdateManyWithoutCategoryNestedInput.schema';
import { merchandiseUpdateManyWithoutCategoryNestedInputObjectSchema } from './merchandiseUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUpdateWithoutBreedInput> = z
  .object({
    CATEGORY: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    REGISTRATION: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    animal: z
      .lazy(() => animalUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
    merchandise: z
      .lazy(() => merchandiseUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const categoryUpdateWithoutBreedInputObjectSchema = Schema;
