import { z } from 'zod';
import { AnimalUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './AnimalUncheckedCreateNestedManyWithoutCategoryInput.schema';
import { MerchandiseUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './MerchandiseUncheckedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUncheckedCreateWithoutBreedInput> = z
  .object({
    CATEGORY: z.string(),
    REGISTRATION: z.string().optional().nullable(),
    Animal: z
      .lazy(
        () => AnimalUncheckedCreateNestedManyWithoutCategoryInputObjectSchema,
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

export const CategoryUncheckedCreateWithoutBreedInputObjectSchema = Schema;
