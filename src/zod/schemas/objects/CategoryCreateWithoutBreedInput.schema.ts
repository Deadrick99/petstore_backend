import { z } from 'zod';
import { AnimalCreateNestedManyWithoutCategoryInputObjectSchema } from './AnimalCreateNestedManyWithoutCategoryInput.schema';
import { MerchandiseCreateNestedManyWithoutCategoryInputObjectSchema } from './MerchandiseCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateWithoutBreedInput> = z
  .object({
    CATEGORY: z.string(),
    REGISTRATION: z.string().optional().nullable(),
    Animal: z
      .lazy(() => AnimalCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    Merchandise: z
      .lazy(() => MerchandiseCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryCreateWithoutBreedInputObjectSchema = Schema;
