import { z } from 'zod';
import { AnimalUncheckedCreateNestedManyWithoutBreedInputObjectSchema } from './AnimalUncheckedCreateNestedManyWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedUncheckedCreateWithoutCategoryInput> = z
  .object({
    BREED: z.string(),
    Animal: z
      .lazy(() => AnimalUncheckedCreateNestedManyWithoutBreedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BreedUncheckedCreateWithoutCategoryInputObjectSchema = Schema;
