import { z } from 'zod';
import { AnimalCreateNestedManyWithoutCategoryInputObjectSchema } from './AnimalCreateNestedManyWithoutCategoryInput.schema';
import { BreedCreateNestedManyWithoutCategoryInputObjectSchema } from './BreedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateWithoutMerchandiseInput> = z
  .object({
    CATEGORY: z.string(),
    REGISTRATION: z.string().optional().nullable(),
    Animal: z
      .lazy(() => AnimalCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    Breed: z
      .lazy(() => BreedCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryCreateWithoutMerchandiseInputObjectSchema = Schema;
