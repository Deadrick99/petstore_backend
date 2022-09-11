import { z } from 'zod';
import { animalCreateNestedManyWithoutCategoryInputObjectSchema } from './animalCreateNestedManyWithoutCategoryInput.schema';
import { breedCreateNestedManyWithoutCategoryInputObjectSchema } from './breedCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryCreateWithoutMerchandiseInput> = z
  .object({
    CATEGORY: z.string(),
    REGISTRATION: z.string().optional().nullable(),
    animal: z
      .lazy(() => animalCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
    breed: z
      .lazy(() => breedCreateNestedManyWithoutCategoryInputObjectSchema)
      .optional(),
  })
  .strict();

export const categoryCreateWithoutMerchandiseInputObjectSchema = Schema;
