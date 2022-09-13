import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryUpdateOneRequiredWithoutBreedNestedInputObjectSchema } from './CategoryUpdateOneRequiredWithoutBreedNestedInput.schema';
import { AnimalUpdateManyWithoutBreedNestedInputObjectSchema } from './AnimalUpdateManyWithoutBreedNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedUpdateInput> = z
  .object({
    BREED: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Category: z
      .lazy(() => CategoryUpdateOneRequiredWithoutBreedNestedInputObjectSchema)
      .optional(),
    Animal: z
      .lazy(() => AnimalUpdateManyWithoutBreedNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BreedUpdateInputObjectSchema = Schema;
