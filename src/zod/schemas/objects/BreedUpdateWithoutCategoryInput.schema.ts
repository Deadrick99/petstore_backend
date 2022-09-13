import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AnimalUpdateManyWithoutBreedNestedInputObjectSchema } from './AnimalUpdateManyWithoutBreedNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedUpdateWithoutCategoryInput> = z
  .object({
    BREED: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Animal: z
      .lazy(() => AnimalUpdateManyWithoutBreedNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BreedUpdateWithoutCategoryInputObjectSchema = Schema;
