import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BreedUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './BreedUncheckedUpdateManyWithoutCategoryNestedInput.schema';
import { MerchandiseUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './MerchandiseUncheckedUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutAnimalInput> = z
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
    Breed: z
      .lazy(
        () => BreedUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
      )
      .optional(),
    Merchandise: z
      .lazy(
        () =>
          MerchandiseUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CategoryUncheckedUpdateWithoutAnimalInputObjectSchema = Schema;
