import { z } from 'zod';
import { BreedUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './BreedUncheckedCreateNestedManyWithoutCategoryInput.schema';
import { MerchandiseUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './MerchandiseUncheckedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutAnimalInput> = z
  .object({
    CATEGORY: z.string(),
    REGISTRATION: z.string().optional().nullable(),
    Breed: z
      .lazy(
        () => BreedUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
      )
      .optional(),
    Merchandise: z
      .lazy(
        () =>
          MerchandiseUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const CategoryUncheckedCreateWithoutAnimalInputObjectSchema = Schema;
