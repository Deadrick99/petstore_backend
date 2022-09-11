import { z } from 'zod';
import { animalUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './animalUncheckedCreateNestedManyWithoutCategoryInput.schema';
import { merchandiseUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './merchandiseUncheckedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUncheckedCreateWithoutBreedInput> = z
  .object({
    CATEGORY: z.string(),
    REGISTRATION: z.string().optional().nullable(),
    animal: z
      .lazy(
        () => animalUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
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

export const categoryUncheckedCreateWithoutBreedInputObjectSchema = Schema;
