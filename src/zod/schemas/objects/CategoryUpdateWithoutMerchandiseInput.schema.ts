import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AnimalUpdateManyWithoutCategoryNestedInputObjectSchema } from './AnimalUpdateManyWithoutCategoryNestedInput.schema';
import { BreedUpdateManyWithoutCategoryNestedInputObjectSchema } from './BreedUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateWithoutMerchandiseInput> = z
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
      .lazy(() => AnimalUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
    Breed: z
      .lazy(() => BreedUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryUpdateWithoutMerchandiseInputObjectSchema = Schema;
