import { z } from 'zod';
import { BreedCreateNestedManyWithoutCategoryInputObjectSchema } from './BreedCreateNestedManyWithoutCategoryInput.schema';
import { MerchandiseCreateNestedManyWithoutCategoryInputObjectSchema } from './MerchandiseCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateWithoutAnimalInput> = z
  .object({
    CATEGORY: z.string(),
    REGISTRATION: z.string().optional().nullable(),
    Breed: z
      .lazy(() => BreedCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    Merchandise: z
      .lazy(() => MerchandiseCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const CategoryCreateWithoutAnimalInputObjectSchema = Schema;
