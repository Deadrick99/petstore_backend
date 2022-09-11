import { z } from 'zod';
import { categoryCreateWithoutBreedInputObjectSchema } from './categoryCreateWithoutBreedInput.schema';
import { categoryUncheckedCreateWithoutBreedInputObjectSchema } from './categoryUncheckedCreateWithoutBreedInput.schema';
import { categoryCreateOrConnectWithoutBreedInputObjectSchema } from './categoryCreateOrConnectWithoutBreedInput.schema';
import { categoryUpsertWithoutBreedInputObjectSchema } from './categoryUpsertWithoutBreedInput.schema';
import { categoryWhereUniqueInputObjectSchema } from './categoryWhereUniqueInput.schema';
import { categoryUpdateWithoutBreedInputObjectSchema } from './categoryUpdateWithoutBreedInput.schema';
import { categoryUncheckedUpdateWithoutBreedInputObjectSchema } from './categoryUncheckedUpdateWithoutBreedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUpdateOneRequiredWithoutBreedNestedInput> =
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
        upsert: z
          .lazy(() => categoryUpsertWithoutBreedInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => categoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => categoryUpdateWithoutBreedInputObjectSchema),
            z.lazy(() => categoryUncheckedUpdateWithoutBreedInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const categoryUpdateOneRequiredWithoutBreedNestedInputObjectSchema =
  Schema;
