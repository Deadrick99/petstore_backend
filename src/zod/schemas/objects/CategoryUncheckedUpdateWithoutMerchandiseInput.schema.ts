import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AnimalUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './AnimalUncheckedUpdateManyWithoutCategoryNestedInput.schema';
import { BreedUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './BreedUncheckedUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutMerchandiseInput> =
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
      Animal: z
        .lazy(
          () => AnimalUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
        )
        .optional(),
      Breed: z
        .lazy(
          () => BreedUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const CategoryUncheckedUpdateWithoutMerchandiseInputObjectSchema =
  Schema;
