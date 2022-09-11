import { z } from 'zod';
import { animalCreateNestedManyWithoutBreedInputObjectSchema } from './animalCreateNestedManyWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedCreateWithoutCategoryInput> = z
  .object({
    BREED: z.string(),
    animal: z
      .lazy(() => animalCreateNestedManyWithoutBreedInputObjectSchema)
      .optional(),
  })
  .strict();

export const breedCreateWithoutCategoryInputObjectSchema = Schema;
