import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { animalUpdateManyWithoutCategoryNestedInputObjectSchema } from './animalUpdateManyWithoutCategoryNestedInput.schema';
import { breedUpdateManyWithoutCategoryNestedInputObjectSchema } from './breedUpdateManyWithoutCategoryNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUpdateWithoutMerchandiseInput> = z
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
      .lazy(() => animalUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
    breed: z
      .lazy(() => breedUpdateManyWithoutCategoryNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const categoryUpdateWithoutMerchandiseInputObjectSchema = Schema;
