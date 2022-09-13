import { z } from 'zod';
import { AnimalUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './AnimalUncheckedCreateNestedManyWithoutCategoryInput.schema';
import { BreedUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './BreedUncheckedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutMerchandiseInput> =
  z
    .object({
      CATEGORY: z.string(),
      REGISTRATION: z.string().optional().nullable(),
      Animal: z
        .lazy(
          () => AnimalUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
        )
        .optional(),
      Breed: z
        .lazy(
          () => BreedUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const CategoryUncheckedCreateWithoutMerchandiseInputObjectSchema =
  Schema;
