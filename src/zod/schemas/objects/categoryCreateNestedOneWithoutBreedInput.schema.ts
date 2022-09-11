import { z } from 'zod';
import { categoryCreateWithoutBreedInputObjectSchema } from './categoryCreateWithoutBreedInput.schema';
import { categoryUncheckedCreateWithoutBreedInputObjectSchema } from './categoryUncheckedCreateWithoutBreedInput.schema';
import { categoryCreateOrConnectWithoutBreedInputObjectSchema } from './categoryCreateOrConnectWithoutBreedInput.schema';
import { categoryWhereUniqueInputObjectSchema } from './categoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryCreateNestedOneWithoutBreedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => categoryCreateWithoutBreedInputObjectSchema),
            z.lazy(() => categoryUncheckedCreateWithoutBreedInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => categoryCreateOrConnectWithoutBreedInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => categoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const categoryCreateNestedOneWithoutBreedInputObjectSchema = Schema;
