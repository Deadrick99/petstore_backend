import { z } from 'zod';
import { CategoryCreateNestedOneWithoutBreedInputObjectSchema } from './CategoryCreateNestedOneWithoutBreedInput.schema';
import { AnimalCreateNestedManyWithoutBreedInputObjectSchema } from './AnimalCreateNestedManyWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedCreateInput> = z
  .object({
    BREED: z.string(),
    Category: z.lazy(
      () => CategoryCreateNestedOneWithoutBreedInputObjectSchema,
    ),
    Animal: z
      .lazy(() => AnimalCreateNestedManyWithoutBreedInputObjectSchema)
      .optional(),
  })
  .strict();

export const BreedCreateInputObjectSchema = Schema;
