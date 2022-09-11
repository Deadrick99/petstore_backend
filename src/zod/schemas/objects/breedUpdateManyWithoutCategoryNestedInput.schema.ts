import { z } from 'zod';
import { breedCreateWithoutCategoryInputObjectSchema } from './breedCreateWithoutCategoryInput.schema';
import { breedUncheckedCreateWithoutCategoryInputObjectSchema } from './breedUncheckedCreateWithoutCategoryInput.schema';
import { breedCreateOrConnectWithoutCategoryInputObjectSchema } from './breedCreateOrConnectWithoutCategoryInput.schema';
import { breedUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './breedUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { breedWhereUniqueInputObjectSchema } from './breedWhereUniqueInput.schema';
import { breedUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './breedUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { breedUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './breedUpdateManyWithWhereWithoutCategoryInput.schema';
import { breedScalarWhereInputObjectSchema } from './breedScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedUpdateManyWithoutCategoryNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => breedCreateWithoutCategoryInputObjectSchema),
            z.lazy(() => breedCreateWithoutCategoryInputObjectSchema).array(),
            z.lazy(() => breedUncheckedCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => breedUncheckedCreateWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => breedCreateOrConnectWithoutCategoryInputObjectSchema),
            z
              .lazy(() => breedCreateOrConnectWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .union([
            z.lazy(
              () => breedUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  breedUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        set: z
          .union([
            z.lazy(() => breedWhereUniqueInputObjectSchema),
            z.lazy(() => breedWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => breedWhereUniqueInputObjectSchema),
            z.lazy(() => breedWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => breedWhereUniqueInputObjectSchema),
            z.lazy(() => breedWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => breedWhereUniqueInputObjectSchema),
            z.lazy(() => breedWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => breedUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  breedUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(
              () => breedUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () => breedUpdateManyWithWhereWithoutCategoryInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => breedScalarWhereInputObjectSchema),
            z.lazy(() => breedScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const breedUpdateManyWithoutCategoryNestedInputObjectSchema = Schema;
