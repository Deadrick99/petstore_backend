import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { animalUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './animalUncheckedUpdateManyWithoutCategoryNestedInput.schema';
import { breedUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './breedUncheckedUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUncheckedUpdateWithoutMerchandiseInput> =
  z
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
      breed: z
        .lazy(
          () => breedUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const categoryUncheckedUpdateWithoutMerchandiseInputObjectSchema =
  Schema;
