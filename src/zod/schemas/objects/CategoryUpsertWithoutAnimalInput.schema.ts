import { z } from 'zod';
import { CategoryUpdateWithoutAnimalInputObjectSchema } from './CategoryUpdateWithoutAnimalInput.schema';
import { CategoryUncheckedUpdateWithoutAnimalInputObjectSchema } from './CategoryUncheckedUpdateWithoutAnimalInput.schema';
import { CategoryCreateWithoutAnimalInputObjectSchema } from './CategoryCreateWithoutAnimalInput.schema';
import { CategoryUncheckedCreateWithoutAnimalInputObjectSchema } from './CategoryUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpsertWithoutAnimalInput> = z
  .object({
    update: z.union([
      z.lazy(() => CategoryUpdateWithoutAnimalInputObjectSchema),
      z.lazy(() => CategoryUncheckedUpdateWithoutAnimalInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutAnimalInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryUpsertWithoutAnimalInputObjectSchema = Schema;
