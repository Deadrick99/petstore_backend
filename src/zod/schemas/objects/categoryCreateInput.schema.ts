import { z } from 'zod';
import { animalCreateNestedManyWithoutCategoryInputObjectSchema } from './animalCreateNestedManyWithoutCategoryInput.schema';
import { breedCreateNestedManyWithoutCategoryInputObjectSchema } from './breedCreateNestedManyWithoutCategoryInput.schema';
import { merchandiseCreateNestedManyWithoutCategoryInputObjectSchema } from './merchandiseCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryCreateInput> = z
  .object({
    CATEGORY: z.string(),
    REGISTRATION: z.string().optional().nullable(),
    animal: z
      .lazy(() => animalCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    breed: z
      .lazy(() => breedCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    merchandise: z
      .lazy(() => merchandiseCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const categoryCreateInputObjectSchema = Schema;
