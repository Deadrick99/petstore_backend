import { z } from 'zod';
import { categoryCreateWithoutAnimalInputObjectSchema } from './categoryCreateWithoutAnimalInput.schema';
import { categoryUncheckedCreateWithoutAnimalInputObjectSchema } from './categoryUncheckedCreateWithoutAnimalInput.schema';
import { categoryCreateOrConnectWithoutAnimalInputObjectSchema } from './categoryCreateOrConnectWithoutAnimalInput.schema';
import { categoryWhereUniqueInputObjectSchema } from './categoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryCreateNestedOneWithoutAnimalInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => categoryCreateWithoutAnimalInputObjectSchema),
            z.lazy(() => categoryUncheckedCreateWithoutAnimalInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => categoryCreateOrConnectWithoutAnimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => categoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const categoryCreateNestedOneWithoutAnimalInputObjectSchema = Schema;
