import { z } from 'zod';
import { categoryCreateWithoutAnimalInputObjectSchema } from './categoryCreateWithoutAnimalInput.schema';
import { categoryUncheckedCreateWithoutAnimalInputObjectSchema } from './categoryUncheckedCreateWithoutAnimalInput.schema';
import { categoryCreateOrConnectWithoutAnimalInputObjectSchema } from './categoryCreateOrConnectWithoutAnimalInput.schema';
import { categoryUpsertWithoutAnimalInputObjectSchema } from './categoryUpsertWithoutAnimalInput.schema';
import { categoryWhereUniqueInputObjectSchema } from './categoryWhereUniqueInput.schema';
import { categoryUpdateWithoutAnimalInputObjectSchema } from './categoryUpdateWithoutAnimalInput.schema';
import { categoryUncheckedUpdateWithoutAnimalInputObjectSchema } from './categoryUncheckedUpdateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.categoryUpdateOneWithoutAnimalNestedInput> =
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
        upsert: z
          .lazy(() => categoryUpsertWithoutAnimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
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
            z.lazy(() => categoryUpdateWithoutAnimalInputObjectSchema),
            z.lazy(() => categoryUncheckedUpdateWithoutAnimalInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const categoryUpdateOneWithoutAnimalNestedInputObjectSchema = Schema;
