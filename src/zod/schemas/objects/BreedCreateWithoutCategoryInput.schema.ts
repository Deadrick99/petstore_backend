import { z } from 'zod';
import { AnimalCreateNestedManyWithoutBreedInputObjectSchema } from './AnimalCreateNestedManyWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedCreateWithoutCategoryInput> = z
  .object({
    BREED: z.string(),
    Animal: z
      .lazy(() => AnimalCreateNestedManyWithoutBreedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BreedCreateWithoutCategoryInputObjectSchema = Schema;
