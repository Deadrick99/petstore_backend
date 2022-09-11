import { z } from 'zod';
import { merchandiseorderCreateWithoutEmployeeInputObjectSchema } from './merchandiseorderCreateWithoutEmployeeInput.schema';
import { merchandiseorderUncheckedCreateWithoutEmployeeInputObjectSchema } from './merchandiseorderUncheckedCreateWithoutEmployeeInput.schema';
import { merchandiseorderCreateOrConnectWithoutEmployeeInputObjectSchema } from './merchandiseorderCreateOrConnectWithoutEmployeeInput.schema';
import { merchandiseorderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema } from './merchandiseorderUpsertWithWhereUniqueWithoutEmployeeInput.schema';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';
import { merchandiseorderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema } from './merchandiseorderUpdateWithWhereUniqueWithoutEmployeeInput.schema';
import { merchandiseorderUpdateManyWithWhereWithoutEmployeeInputObjectSchema } from './merchandiseorderUpdateManyWithWhereWithoutEmployeeInput.schema';
import { merchandiseorderScalarWhereInputObjectSchema } from './merchandiseorderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUncheckedUpdateManyWithoutEmployeeNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => merchandiseorderCreateWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () => merchandiseorderCreateWithoutEmployeeInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                merchandiseorderUncheckedCreateWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderUncheckedCreateWithoutEmployeeInputObjectSchema,
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
              () =>
                merchandiseorderCreateOrConnectWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderCreateOrConnectWithoutEmployeeInputObjectSchema,
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
                merchandiseorderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema,
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
            z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema),
            z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema),
            z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema),
            z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema),
            z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema).array(),
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
                merchandiseorderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema,
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
                merchandiseorderUpdateManyWithWhereWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderUpdateManyWithWhereWithoutEmployeeInputObjectSchema,
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
            z.lazy(() => merchandiseorderScalarWhereInputObjectSchema),
            z.lazy(() => merchandiseorderScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const merchandiseorderUncheckedUpdateManyWithoutEmployeeNestedInputObjectSchema =
  Schema;
