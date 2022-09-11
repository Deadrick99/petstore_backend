import { z } from 'zod';
import { animalUncheckedCreateNestedManyWithoutBreedInputObjectSchema } from './animalUncheckedCreateNestedManyWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedUncheckedCreateWithoutCategoryInput> = z
  .object({
    BREED: z.string(),
    animal: z
      .lazy(() => animalUncheckedCreateNestedManyWithoutBreedInputObjectSchema)
      .optional(),
  })
  .strict();

export const breedUncheckedCreateWithoutCategoryInputObjectSchema = Schema;
