import { z } from 'zod';
import { categoryCreateNestedOneWithoutBreedInputObjectSchema } from './categoryCreateNestedOneWithoutBreedInput.schema';
import { animalCreateNestedManyWithoutBreedInputObjectSchema } from './animalCreateNestedManyWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedCreateInput> = z
  .object({
    BREED: z.string(),
    category: z.lazy(
      () => categoryCreateNestedOneWithoutBreedInputObjectSchema,
    ),
    animal: z
      .lazy(() => animalCreateNestedManyWithoutBreedInputObjectSchema)
      .optional(),
  })
  .strict();

export const breedCreateInputObjectSchema = Schema;
