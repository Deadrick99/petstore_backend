import { z } from 'zod';
import { categoryWhereUniqueInputObjectSchema } from './categoryWhereUniqueInput.schema';
import { categoryCreateWithoutAnimalInputObjectSchema } from './categoryCreateWithoutAnimalInput.schema';
import { categoryUncheckedCreateWithoutAnimalInputObjectSchema } from './categoryUncheckedCreateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryCreateOrConnectWithoutAnimalInput> = z
  .object({
    where: z.lazy(() => categoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => categoryCreateWithoutAnimalInputObjectSchema),
      z.lazy(() => categoryUncheckedCreateWithoutAnimalInputObjectSchema),
    ]),
  })
  .strict();

export const categoryCreateOrConnectWithoutAnimalInputObjectSchema = Schema;
