import { z } from 'zod';
import { CategoryCreateWithoutAnimalInputObjectSchema } from './CategoryCreateWithoutAnimalInput.schema';
import { CategoryUncheckedCreateWithoutAnimalInputObjectSchema } from './CategoryUncheckedCreateWithoutAnimalInput.schema';
import { CategoryCreateOrConnectWithoutAnimalInputObjectSchema } from './CategoryCreateOrConnectWithoutAnimalInput.schema';
import { CategoryUpsertWithoutAnimalInputObjectSchema } from './CategoryUpsertWithoutAnimalInput.schema';
import { CategoryWhereUniqueInputObjectSchema } from './CategoryWhereUniqueInput.schema';
import { CategoryUpdateWithoutAnimalInputObjectSchema } from './CategoryUpdateWithoutAnimalInput.schema';
import { CategoryUncheckedUpdateWithoutAnimalInputObjectSchema } from './CategoryUncheckedUpdateWithoutAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CategoryUpdateOneWithoutAnimalNestedInput> =
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
        upsert: z
          .lazy(() => CategoryUpsertWithoutAnimalInputObjectSchema)
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
        connect: z.lazy(() => CategoryWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => CategoryUpdateWithoutAnimalInputObjectSchema),
            z.lazy(() => CategoryUncheckedUpdateWithoutAnimalInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const CategoryUpdateOneWithoutAnimalNestedInputObjectSchema = Schema;
