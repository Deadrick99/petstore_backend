import { z } from 'zod';
import { customerCreateWithoutCityInputObjectSchema } from './customerCreateWithoutCityInput.schema';
import { customerUncheckedCreateWithoutCityInputObjectSchema } from './customerUncheckedCreateWithoutCityInput.schema';
import { customerCreateOrConnectWithoutCityInputObjectSchema } from './customerCreateOrConnectWithoutCityInput.schema';
import { customerUpsertWithWhereUniqueWithoutCityInputObjectSchema } from './customerUpsertWithWhereUniqueWithoutCityInput.schema';
import { customerWhereUniqueInputObjectSchema } from './customerWhereUniqueInput.schema';
import { customerUpdateWithWhereUniqueWithoutCityInputObjectSchema } from './customerUpdateWithWhereUniqueWithoutCityInput.schema';
import { customerUpdateManyWithWhereWithoutCityInputObjectSchema } from './customerUpdateManyWithWhereWithoutCityInput.schema';
import { customerScalarWhereInputObjectSchema } from './customerScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerUpdateManyWithoutCityNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => customerCreateWithoutCityInputObjectSchema),
            z.lazy(() => customerCreateWithoutCityInputObjectSchema).array(),
            z.lazy(() => customerUncheckedCreateWithoutCityInputObjectSchema),
            z
              .lazy(() => customerUncheckedCreateWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => customerCreateOrConnectWithoutCityInputObjectSchema),
            z
              .lazy(() => customerCreateOrConnectWithoutCityInputObjectSchema)
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
              () => customerUpsertWithWhereUniqueWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => customerUpsertWithWhereUniqueWithoutCityInputObjectSchema,
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
            z.lazy(() => customerWhereUniqueInputObjectSchema),
            z.lazy(() => customerWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => customerWhereUniqueInputObjectSchema),
            z.lazy(() => customerWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => customerWhereUniqueInputObjectSchema),
            z.lazy(() => customerWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => customerWhereUniqueInputObjectSchema),
            z.lazy(() => customerWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => customerUpdateWithWhereUniqueWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => customerUpdateWithWhereUniqueWithoutCityInputObjectSchema,
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
              () => customerUpdateManyWithWhereWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => customerUpdateManyWithWhereWithoutCityInputObjectSchema,
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
            z.lazy(() => customerScalarWhereInputObjectSchema),
            z.lazy(() => customerScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const customerUpdateManyWithoutCityNestedInputObjectSchema = Schema;
