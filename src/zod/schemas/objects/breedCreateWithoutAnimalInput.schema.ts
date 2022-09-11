import { z } from 'zod';
import { categoryCreateNestedOneWithoutBreedInputObjectSchema } from './categoryCreateNestedOneWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedCreateWithoutAnimalInput> = z
  .object({
    BREED: z.string(),
    category: z.lazy(
      () => categoryCreateNestedOneWithoutBreedInputObjectSchema,
    ),
  })
  .strict();

export const breedCreateWithoutAnimalInputObjectSchema = Schema;
