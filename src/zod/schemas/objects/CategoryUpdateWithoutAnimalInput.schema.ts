import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { BreedUpdateManyWithoutCategoryNestedInputObjectSchema } from './BreedUpdateManyWithoutCategoryNestedInput.schema';
import { MerchandiseUpdateManyWithoutCategoryNestedInputObjectSchema } from './MerchandiseUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateWithoutAnimalInput> = z
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
      .lazy(() => BreedUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
    Merchandise: z
      .lazy(() => MerchandiseUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryUpdateWithoutAnimalInputObjectSchema = Schema;
