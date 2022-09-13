import { z } from 'zod';
import { CustomerCreateWithoutCityInputObjectSchema } from './CustomerCreateWithoutCityInput.schema';
import { CustomerUncheckedCreateWithoutCityInputObjectSchema } from './CustomerUncheckedCreateWithoutCityInput.schema';
import { CustomerCreateOrConnectWithoutCityInputObjectSchema } from './CustomerCreateOrConnectWithoutCityInput.schema';
import { CustomerUpsertWithWhereUniqueWithoutCityInputObjectSchema } from './CustomerUpsertWithWhereUniqueWithoutCityInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';
import { CustomerUpdateWithWhereUniqueWithoutCityInputObjectSchema } from './CustomerUpdateWithWhereUniqueWithoutCityInput.schema';
import { CustomerUpdateManyWithWhereWithoutCityInputObjectSchema } from './CustomerUpdateManyWithWhereWithoutCityInput.schema';
import { CustomerScalarWhereInputObjectSchema } from './CustomerScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUpdateManyWithoutCityNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => CustomerCreateWithoutCityInputObjectSchema),
            z.lazy(() => CustomerCreateWithoutCityInputObjectSchema).array(),
            z.lazy(() => CustomerUncheckedCreateWithoutCityInputObjectSchema),
            z
              .lazy(() => CustomerUncheckedCreateWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => CustomerCreateOrConnectWithoutCityInputObjectSchema),
            z
              .lazy(() => CustomerCreateOrConnectWithoutCityInputObjectSchema)
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
              () => CustomerUpsertWithWhereUniqueWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => CustomerUpsertWithWhereUniqueWithoutCityInputObjectSchema,
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
            z.lazy(() => CustomerWhereUniqueInputObjectSchema),
            z.lazy(() => CustomerWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => CustomerWhereUniqueInputObjectSchema),
            z.lazy(() => CustomerWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => CustomerWhereUniqueInputObjectSchema),
            z.lazy(() => CustomerWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => CustomerWhereUniqueInputObjectSchema),
            z.lazy(() => CustomerWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => CustomerUpdateWithWhereUniqueWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => CustomerUpdateWithWhereUniqueWithoutCityInputObjectSchema,
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
              () => CustomerUpdateManyWithWhereWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => CustomerUpdateManyWithWhereWithoutCityInputObjectSchema,
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
            z.lazy(() => CustomerScalarWhereInputObjectSchema),
            z.lazy(() => CustomerScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const CustomerUpdateManyWithoutCityNestedInputObjectSchema = Schema;
