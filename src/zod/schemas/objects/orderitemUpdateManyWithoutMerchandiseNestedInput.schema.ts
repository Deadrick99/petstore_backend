import { z } from 'zod';
import { orderitemCreateWithoutMerchandiseInputObjectSchema } from './orderitemCreateWithoutMerchandiseInput.schema';
import { orderitemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './orderitemUncheckedCreateWithoutMerchandiseInput.schema';
import { orderitemCreateOrConnectWithoutMerchandiseInputObjectSchema } from './orderitemCreateOrConnectWithoutMerchandiseInput.schema';
import { orderitemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema } from './orderitemUpsertWithWhereUniqueWithoutMerchandiseInput.schema';
import { orderitemWhereUniqueInputObjectSchema } from './orderitemWhereUniqueInput.schema';
import { orderitemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema } from './orderitemUpdateWithWhereUniqueWithoutMerchandiseInput.schema';
import { orderitemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema } from './orderitemUpdateManyWithWhereWithoutMerchandiseInput.schema';
import { orderitemScalarWhereInputObjectSchema } from './orderitemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemUpdateManyWithoutMerchandiseNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => orderitemCreateWithoutMerchandiseInputObjectSchema),
            z
              .lazy(() => orderitemCreateWithoutMerchandiseInputObjectSchema)
              .array(),
            z.lazy(
              () => orderitemUncheckedCreateWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemUncheckedCreateWithoutMerchandiseInputObjectSchema,
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
              () => orderitemCreateOrConnectWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemCreateOrConnectWithoutMerchandiseInputObjectSchema,
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
                orderitemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema,
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
            z.lazy(() => orderitemWhereUniqueInputObjectSchema),
            z.lazy(() => orderitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => orderitemWhereUniqueInputObjectSchema),
            z.lazy(() => orderitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => orderitemWhereUniqueInputObjectSchema),
            z.lazy(() => orderitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => orderitemWhereUniqueInputObjectSchema),
            z.lazy(() => orderitemWhereUniqueInputObjectSchema).array(),
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
                orderitemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema,
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
                orderitemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema,
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
            z.lazy(() => orderitemScalarWhereInputObjectSchema),
            z.lazy(() => orderitemScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const orderitemUpdateManyWithoutMerchandiseNestedInputObjectSchema =
  Schema;
