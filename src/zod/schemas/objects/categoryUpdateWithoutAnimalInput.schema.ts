import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { breedUpdateManyWithoutCategoryNestedInputObjectSchema } from './breedUpdateManyWithoutCategoryNestedInput.schema';
import { merchandiseUpdateManyWithoutCategoryNestedInputObjectSchema } from './merchandiseUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUpdateWithoutAnimalInput> = z
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
      .lazy(() => breedUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
    merchandise: z
      .lazy(() => merchandiseUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const categoryUpdateWithoutAnimalInputObjectSchema = Schema;
