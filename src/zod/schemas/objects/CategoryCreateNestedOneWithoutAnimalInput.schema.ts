import { z } from 'zod';
import { CategoryCreateWithoutAnimalInputObjectSchema } from './CategoryCreateWithoutAnimalInput.schema';
import { CategoryUncheckedCreateWithoutAnimalInputObjectSchema } from './CategoryUncheckedCreateWithoutAnimalInput.schema';
import { CategoryCreateOrConnectWithoutAnimalInputObjectSchema } from './CategoryCreateOrConnectWithoutAnimalInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutAnimalInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => CategoryCreateWithoutAnimalInputObjectSchema),
            z.lazy(() => CategoryUncheckedCreateWithoutAnimalInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => CategoryCreateOrConnectWithoutAnimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const CategoryCreateNestedOneWithoutAnimalInputObjectSchema = Schema;
