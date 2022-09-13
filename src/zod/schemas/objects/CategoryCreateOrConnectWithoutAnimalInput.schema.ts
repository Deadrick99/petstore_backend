import { z } from 'zod';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryCreateWithoutAnimalInputObjectSchema } from './CategoryCreateWithoutAnimalInput.schema';
import { CategoryUncheckedCreateWithoutAnimalInputObjectSchema } from './CategoryUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateOrConnectWithoutAnimalInput> = z
  .object({
    where: z.lazy(() => CategoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => CategoryCreateWithoutAnimalInputObjectSchema),
      z.lazy(() => CategoryUncheckedCreateWithoutAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const CategoryCreateOrConnectWithoutAnimalInputObjectSchema = Schema;
