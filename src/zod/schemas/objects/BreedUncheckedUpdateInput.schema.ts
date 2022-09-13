import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { AnimalUncheckedUpdateManyWithoutBreedNestedInputObjectSchema } from './AnimalUncheckedUpdateManyWithoutBreedNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedUncheckedUpdateInput> = z
  .object({
    CATEGORY: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    BREED: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    Animal: z
      .lazy(() => AnimalUncheckedUpdateManyWithoutBreedNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BreedUncheckedUpdateInputObjectSchema = Schema;
