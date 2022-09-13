import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { CategoryUpdateOneRequiredWithoutBreedNestedInputObjectSchema } from './CategoryUpdateOneRequiredWithoutBreedNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedUpdateWithoutAnimalInput> = z
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
  })
  .strict();

export const BreedUpdateWithoutAnimalInputObjectSchema = Schema;
