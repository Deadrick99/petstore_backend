import { z } from 'zod';
import { CategoryCreateNestedOneWithoutBreedInputObjectSchema } from './CategoryCreateNestedOneWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedCreateWithoutAnimalInput> = z
  .object({
    BREED: z.string(),
    Category: z.lazy(
      () => CategoryCreateNestedOneWithoutBreedInputObjectSchema,
    ),
  })
  .strict();

export const BreedCreateWithoutAnimalInputObjectSchema = Schema;
