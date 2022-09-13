import { z } from 'zod';
import { SupplierCreateWithoutCityInputObjectSchema } from './SupplierCreateWithoutCityInput.schema';
import { SupplierUncheckedCreateWithoutCityInputObjectSchema } from './SupplierUncheckedCreateWithoutCityInput.schema';
import { SupplierCreateOrConnectWithoutCityInputObjectSchema } from './SupplierCreateOrConnectWithoutCityInput.schema';
import { SupplierUpsertWithWhereUniqueWithoutCityInputObjectSchema } from './SupplierUpsertWithWhereUniqueWithoutCityInput.schema';
import { SupplierWhereUniqueInputObjectSchema } from './SupplierWhereUniqueInput.schema';
import { SupplierUpdateWithWhereUniqueWithoutCityInputObjectSchema } from './SupplierUpdateWithWhereUniqueWithoutCityInput.schema';
import { SupplierUpdateManyWithWhereWithoutCityInputObjectSchema } from './SupplierUpdateManyWithWhereWithoutCityInput.schema';
import { SupplierScalarWhereInputObjectSchema } from './SupplierScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpdateManyWithoutCityNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SupplierCreateWithoutCityInputObjectSchema),
            z.lazy(() => SupplierCreateWithoutCityInputObjectSchema).array(),
            z.lazy(() => SupplierUncheckedCreateWithoutCityInputObjectSchema),
            z
              .lazy(() => SupplierUncheckedCreateWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => SupplierCreateOrConnectWithoutCityInputObjectSchema),
            z
              .lazy(() => SupplierCreateOrConnectWithoutCityInputObjectSchema)
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
              () => SupplierUpsertWithWhereUniqueWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => SupplierUpsertWithWhereUniqueWithoutCityInputObjectSchema,
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
            z.lazy(() => SupplierWhereUniqueInputObjectSchema),
            z.lazy(() => SupplierWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => SupplierWhereUniqueInputObjectSchema),
            z.lazy(() => SupplierWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => SupplierWhereUniqueInputObjectSchema),
            z.lazy(() => SupplierWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => SupplierWhereUniqueInputObjectSchema),
            z.lazy(() => SupplierWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => SupplierUpdateWithWhereUniqueWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => SupplierUpdateWithWhereUniqueWithoutCityInputObjectSchema,
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
              () => SupplierUpdateManyWithWhereWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => SupplierUpdateManyWithWhereWithoutCityInputObjectSchema,
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
            z.lazy(() => SupplierScalarWhereInputObjectSchema),
            z.lazy(() => SupplierScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SupplierUpdateManyWithoutCityNestedInputObjectSchema = Schema;
