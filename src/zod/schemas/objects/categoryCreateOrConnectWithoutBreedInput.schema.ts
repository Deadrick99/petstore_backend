import { z } from 'zod';
import { categoryWhereUniqueInputObjectSchema } from './categoryWhereUniqueInput.schema';
import { categoryCreateWithoutBreedInputObjectSchema } from './categoryCreateWithoutBreedInput.schema';
import { categoryUncheckedCreateWithoutBreedInputObjectSchema } from './categoryUncheckedCreateWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryCreateOrConnectWithoutBreedInput> = z
  .object({
    where: z.lazy(() => categoryWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => categoryCreateWithoutBreedInputObjectSchema),
      z.lazy(() => categoryUncheckedCreateWithoutBreedInputObjectSchema),
    ]),
  })
  .strict();

export const categoryCreateOrConnectWithoutBreedInputObjectSchema = Schema;
