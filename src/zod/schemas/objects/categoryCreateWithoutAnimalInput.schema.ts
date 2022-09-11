import { z } from 'zod';
import { breedCreateNestedManyWithoutCategoryInputObjectSchema } from './breedCreateNestedManyWithoutCategoryInput.schema';
import { merchandiseCreateNestedManyWithoutCategoryInputObjectSchema } from './merchandiseCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryCreateWithoutAnimalInput> = z
  .object({
    CATEGORY: z.string(),
    REGISTRATION: z.string().optional().nullable(),
    breed: z
      .lazy(() => breedCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    merchandise: z
      .lazy(() => merchandiseCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const categoryCreateWithoutAnimalInputObjectSchema = Schema;
