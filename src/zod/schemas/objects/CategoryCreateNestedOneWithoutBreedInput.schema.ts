import { z } from 'zod';
import { CategoryCreateWithoutBreedInputObjectSchema } from './CategoryCreateWithoutBreedInput.schema';
import { CategoryUncheckedCreateWithoutBreedInputObjectSchema } from './CategoryUncheckedCreateWithoutBreedInput.schema';
import { CategoryCreateOrConnectWithoutBreedInputObjectSchema } from './CategoryCreateOrConnectWithoutBreedInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryCreateNestedOneWithoutBreedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => CategoryCreateWithoutBreedInputObjectSchema),
            z.lazy(() => CategoryUncheckedCreateWithoutBreedInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => CategoryCreateOrConnectWithoutBreedInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const CategoryCreateNestedOneWithoutBreedInputObjectSchema = Schema;
