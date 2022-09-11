import { z } from 'zod';
import { categoryUpdateWithoutAnimalInputObjectSchema } from './categoryUpdateWithoutAnimalInput.schema';
import { categoryUncheckedUpdateWithoutAnimalInputObjectSchema } from './categoryUncheckedUpdateWithoutAnimalInput.schema';
import { categoryCreateWithoutAnimalInputObjectSchema } from './categoryCreateWithoutAnimalInput.schema';
import { categoryUncheckedCreateWithoutAnimalInputObjectSchema } from './categoryUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUpsertWithoutAnimalInput> = z
  .object({
    update: z.union([
      z.lazy(() => categoryUpdateWithoutAnimalInputObjectSchema),
      z.lazy(() => categoryUncheckedUpdateWithoutAnimalInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => categoryCreateWithoutAnimalInputObjectSchema),
      z.lazy(() => categoryUncheckedCreateWithoutAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const categoryUpsertWithoutAnimalInputObjectSchema = Schema;
