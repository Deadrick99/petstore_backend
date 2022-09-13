import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutBreedInputObjectSchema } from './CategoryCreateWithoutBreedInput.schema';
import { CategoryUncheckedCreateWithoutBreedInputObjectSchema } from './CategoryUncheckedCreateWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutBreedInput> = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutBreedInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutBreedInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryCreateOrConnectWithoutBreedInputObjectSchema = Schema;
