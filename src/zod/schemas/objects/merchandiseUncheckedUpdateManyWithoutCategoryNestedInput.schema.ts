import { z } from 'zod';
import { merchandiseCreateWithoutCategoryInputObjectSchema } from './merchandiseCreateWithoutCategoryInput.schema';
import { merchandiseUncheckedCreateWithoutCategoryInputObjectSchema } from './merchandiseUncheckedCreateWithoutCategoryInput.schema';
import { merchandiseCreateOrConnectWithoutCategoryInputObjectSchema } from './merchandiseCreateOrConnectWithoutCategoryInput.schema';
import { merchandiseUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './merchandiseUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { merchandiseWhereUniqueInputObjectSchema } from './merchandiseWhereUniqueInput.schema';
import { merchandiseUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './merchandiseUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { merchandiseUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './merchandiseUpdateManyWithWhereWithoutCategoryInput.schema';
import { merchandiseScalarWhereInputObjectSchema } from './merchandiseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUncheckedUpdateManyWithoutCategoryNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => merchandiseCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => merchandiseCreateWithoutCategoryInputObjectSchema)
              .array(),
            z.lazy(
              () => merchandiseUncheckedCreateWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseUncheckedCreateWithoutCategoryInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(
              () => merchandiseCreateOrConnectWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseCreateOrConnectWithoutCategoryInputObjectSchema,
              )
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
              () =>
                merchandiseUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
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
            z.lazy(() => merchandiseWhereUniqueInputObjectSchema),
            z.lazy(() => merchandiseWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => merchandiseWhereUniqueInputObjectSchema),
            z.lazy(() => merchandiseWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => merchandiseWhereUniqueInputObjectSchema),
            z.lazy(() => merchandiseWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => merchandiseWhereUniqueInputObjectSchema),
            z.lazy(() => merchandiseWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () =>
                merchandiseUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
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
              () =>
                merchandiseUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseUpdateManyWithWhereWithoutCategoryInputObjectSchema,
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
            z.lazy(() => merchandiseScalarWhereInputObjectSchema),
            z.lazy(() => merchandiseScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const merchandiseUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema =
  Schema;
