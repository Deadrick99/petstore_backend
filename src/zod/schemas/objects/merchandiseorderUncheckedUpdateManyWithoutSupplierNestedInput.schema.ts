import { z } from 'zod';
import { merchandiseorderCreateWithoutSupplierInputObjectSchema } from './merchandiseorderCreateWithoutSupplierInput.schema';
import { merchandiseorderUncheckedCreateWithoutSupplierInputObjectSchema } from './merchandiseorderUncheckedCreateWithoutSupplierInput.schema';
import { merchandiseorderCreateOrConnectWithoutSupplierInputObjectSchema } from './merchandiseorderCreateOrConnectWithoutSupplierInput.schema';
import { merchandiseorderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema } from './merchandiseorderUpsertWithWhereUniqueWithoutSupplierInput.schema';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';
import { merchandiseorderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema } from './merchandiseorderUpdateWithWhereUniqueWithoutSupplierInput.schema';
import { merchandiseorderUpdateManyWithWhereWithoutSupplierInputObjectSchema } from './merchandiseorderUpdateManyWithWhereWithoutSupplierInput.schema';
import { merchandiseorderScalarWhereInputObjectSchema } from './merchandiseorderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUncheckedUpdateManyWithoutSupplierNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => merchandiseorderCreateWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () => merchandiseorderCreateWithoutSupplierInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                merchandiseorderUncheckedCreateWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderUncheckedCreateWithoutSupplierInputObjectSchema,
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
                merchandiseorderCreateOrConnectWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderCreateOrConnectWithoutSupplierInputObjectSchema,
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
                merchandiseorderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema,
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
                merchandiseorderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema,
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
                merchandiseorderUpdateManyWithWhereWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderUpdateManyWithWhereWithoutSupplierInputObjectSchema,
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

export const merchandiseorderUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema =
  Schema;
