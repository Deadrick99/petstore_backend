import { z } from 'zod';
import { supplierCreateWithoutCityInputObjectSchema } from './supplierCreateWithoutCityInput.schema';
import { supplierUncheckedCreateWithoutCityInputObjectSchema } from './supplierUncheckedCreateWithoutCityInput.schema';
import { supplierCreateOrConnectWithoutCityInputObjectSchema } from './supplierCreateOrConnectWithoutCityInput.schema';
import { supplierUpsertWithWhereUniqueWithoutCityInputObjectSchema } from './supplierUpsertWithWhereUniqueWithoutCityInput.schema';
import { supplierWhereUniqueInputObjectSchema } from './supplierWhereUniqueInput.schema';
import { supplierUpdateWithWhereUniqueWithoutCityInputObjectSchema } from './supplierUpdateWithWhereUniqueWithoutCityInput.schema';
import { supplierUpdateManyWithWhereWithoutCityInputObjectSchema } from './supplierUpdateManyWithWhereWithoutCityInput.schema';
import { supplierScalarWhereInputObjectSchema } from './supplierScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierUncheckedUpdateManyWithoutCityNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => supplierCreateWithoutCityInputObjectSchema),
            z.lazy(() => supplierCreateWithoutCityInputObjectSchema).array(),
            z.lazy(() => supplierUncheckedCreateWithoutCityInputObjectSchema),
            z
              .lazy(() => supplierUncheckedCreateWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => supplierCreateOrConnectWithoutCityInputObjectSchema),
            z
              .lazy(() => supplierCreateOrConnectWithoutCityInputObjectSchema)
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
              () => supplierUpsertWithWhereUniqueWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => supplierUpsertWithWhereUniqueWithoutCityInputObjectSchema,
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
            z.lazy(() => supplierWhereUniqueInputObjectSchema),
            z.lazy(() => supplierWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => supplierWhereUniqueInputObjectSchema),
            z.lazy(() => supplierWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => supplierWhereUniqueInputObjectSchema),
            z.lazy(() => supplierWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => supplierWhereUniqueInputObjectSchema),
            z.lazy(() => supplierWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => supplierUpdateWithWhereUniqueWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => supplierUpdateWithWhereUniqueWithoutCityInputObjectSchema,
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
              () => supplierUpdateManyWithWhereWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => supplierUpdateManyWithWhereWithoutCityInputObjectSchema,
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
            z.lazy(() => supplierScalarWhereInputObjectSchema),
            z.lazy(() => supplierScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const supplierUncheckedUpdateManyWithoutCityNestedInputObjectSchema =
  Schema;
