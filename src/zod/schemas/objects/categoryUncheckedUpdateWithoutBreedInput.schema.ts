import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { animalUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './animalUncheckedUpdateManyWithoutCategoryNestedInput.schema';
import { merchandiseUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './merchandiseUncheckedUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUncheckedUpdateWithoutBreedInput> = z
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
      .lazy(
        () => animalUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
      )
      .optional(),
    merchandise: z
      .lazy(
        () =>
          merchandiseUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const categoryUncheckedUpdateWithoutBreedInputObjectSchema = Schema;
