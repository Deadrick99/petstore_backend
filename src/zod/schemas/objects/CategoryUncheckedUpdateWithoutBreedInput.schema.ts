import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AnimalUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './AnimalUncheckedUpdateManyWithoutCategoryNestedInput.schema';
import { MerchandiseUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema } from './MerchandiseUncheckedUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedUpdateWithoutBreedInput> = z
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
    Merchandise: z
      .lazy(
        () =>
          MerchandiseUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CategoryUncheckedUpdateWithoutBreedInputObjectSchema = Schema;
