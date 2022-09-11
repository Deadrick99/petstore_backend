import { z } from 'zod';
import { breedUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './breedUncheckedCreateNestedManyWithoutCategoryInput.schema';
import { merchandiseUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './merchandiseUncheckedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUncheckedCreateWithoutAnimalInput> = z
  .object({
    CATEGORY: z.string(),
    REGISTRATION: z.string().optional().nullable(),
    breed: z
      .lazy(
        () => breedUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
      )
      .optional(),
    merchandise: z
      .lazy(
        () =>
          merchandiseUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const categoryUncheckedCreateWithoutAnimalInputObjectSchema = Schema;
