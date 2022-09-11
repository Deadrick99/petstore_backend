import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { breedUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './breedUncheckedUpdateManyWithoutCategoryNestedInput.schema';
import { merchandiseUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './merchandiseUncheckedUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUncheckedUpdateWithoutAnimalInput> = z
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
    breed: z
      .lazy(
        () => breedUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
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

export const categoryUncheckedUpdateWithoutAnimalInputObjectSchema = Schema;
