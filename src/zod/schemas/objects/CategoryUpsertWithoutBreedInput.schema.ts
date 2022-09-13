import { z } from 'zod';
import { CategoryUpdateWithoutBreedInputObjectSchema } from './CategoryUpdateWithoutBreedInput.schema';
import { CategoryUncheckedUpdateWithoutBreedInputObjectSchema } from './CategoryUncheckedUpdateWithoutBreedInput.schema';
import { CategoryCreateWithoutBreedInputObjectSchema } from './CategoryCreateWithoutBreedInput.schema';
import { CategoryUncheckedCreateWithoutBreedInputObjectSchema } from './CategoryUncheckedCreateWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutBreedInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutBreedInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutBreedInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutBreedInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutBreedInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryUpsertWithoutBreedInputObjectSchema = Schema;
