import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { categoryUpdateOneRequiredWithoutBreedNestedInputObjectSchema } from './categoryUpdateOneRequiredWithoutBreedNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedUpdateWithoutAnimalInput> = z
  .object({
    BREED: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    category: z
      .lazy(() => categoryUpdateOneRequiredWithoutBreedNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const breedUpdateWithoutAnimalInputObjectSchema = Schema;
