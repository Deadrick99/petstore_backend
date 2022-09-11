import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { categoryUpdateOneRequiredWithoutBreedNestedInputObjectSchema } from './categoryUpdateOneRequiredWithoutBreedNestedInput.schema';
import { animalUpdateManyWithoutBreedNestedInputObjectSchema } from './animalUpdateManyWithoutBreedNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedUpdateInput> = z
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
    animal: z
      .lazy(() => animalUpdateManyWithoutBreedNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const breedUpdateInputObjectSchema = Schema;
