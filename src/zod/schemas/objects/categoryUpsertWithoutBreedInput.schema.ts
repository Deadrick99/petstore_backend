import { z } from 'zod';
import { categoryUpdateWithoutBreedInputObjectSchema } from './categoryUpdateWithoutBreedInput.schema';
import { categoryUncheckedUpdateWithoutBreedInputObjectSchema } from './categoryUncheckedUpdateWithoutBreedInput.schema';
import { categoryCreateWithoutBreedInputObjectSchema } from './categoryCreateWithoutBreedInput.schema';
import { categoryUncheckedCreateWithoutBreedInputObjectSchema } from './categoryUncheckedCreateWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUpsertWithoutBreedInput> = z
  .object({
    update: z.union([
      z.lazy(() => categoryUpdateWithoutBreedInputObjectSchema),
      z.lazy(() => categoryUncheckedUpdateWithoutBreedInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => categoryCreateWithoutBreedInputObjectSchema),
      z.lazy(() => categoryUncheckedCreateWithoutBreedInputObjectSchema),
    ]),
  })
  .strict();

export const categoryUpsertWithoutBreedInputObjectSchema = Schema;
