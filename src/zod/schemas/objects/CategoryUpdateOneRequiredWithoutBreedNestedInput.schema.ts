import { z } from 'zod';
import { CategoryCreateWithoutBreedInputObjectSchema } from './CategoryCreateWithoutBreedInput.schema';
import { CategoryUncheckedCreateWithoutBreedInputObjectSchema } from './CategoryUncheckedCreateWithoutBreedInput.schema';
import { CategoryCreateOrConnectWithoutBreedInputObjectSchema } from './CategoryCreateOrConnectWithoutBreedInput.schema';
import { CategoryUpsertWithoutBreedInputObjectSchema } from './CategoryUpsertWithoutBreedInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutBreedInputObjectSchema } from './CategoryUpdateWithoutBreedInput.schema';
import { CategoryUncheckedUpdateWithoutBreedInputObjectSchema } from './CategoryUncheckedUpdateWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateOneRequiredWithoutBreedNestedInput> =
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
        upsert: z
          .lazy(() => CategoryUpsertWithoutBreedInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => CategoryUpdateWithoutBreedInputObjectSchema),
            z.lazy(() => CategoryUncheckedUpdateWithoutBreedInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const CategoryUpdateOneRequiredWithoutBreedNestedInputObjectSchema =
  Schema;
