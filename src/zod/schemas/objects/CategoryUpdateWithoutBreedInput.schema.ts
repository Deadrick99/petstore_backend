import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AnimalUpdateManyWithoutCategoryNestedInputObjectSchema } from './AnimalUpdateManyWithoutCategoryNestedInput.schema';
import { MerchandiseUpdateManyWithoutCategoryNestedInputObjectSchema } from './MerchandiseUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateWithoutBreedInput> = z
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
    Merchandise: z
      .lazy(() => MerchandiseUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryUpdateWithoutBreedInputObjectSchema = Schema;
