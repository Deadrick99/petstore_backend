import { z } from 'zod';
import { OrderItemCreateWithoutMerchandiseInputObjectSchema } from './OrderItemCreateWithoutMerchandiseInput.schema';
import { OrderItemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './OrderItemUncheckedCreateWithoutMerchandiseInput.schema';
import { OrderItemCreateOrConnectWithoutMerchandiseInputObjectSchema } from './OrderItemCreateOrConnectWithoutMerchandiseInput.schema';
import { OrderItemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema } from './OrderItemUpsertWithWhereUniqueWithoutMerchandiseInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema } from './OrderItemUpdateWithWhereUniqueWithoutMerchandiseInput.schema';
import { OrderItemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema } from './OrderItemUpdateManyWithWhereWithoutMerchandiseInput.schema';
import { OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUncheckedUpdateManyWithoutMerchandiseNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => OrderItemCreateWithoutMerchandiseInputObjectSchema),
            z
              .lazy(() => OrderItemCreateWithoutMerchandiseInputObjectSchema)
              .array(),
            z.lazy(
              () => OrderItemUncheckedCreateWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  OrderItemUncheckedCreateWithoutMerchandiseInputObjectSchema,
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
              () => OrderItemCreateOrConnectWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  OrderItemCreateOrConnectWithoutMerchandiseInputObjectSchema,
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
                OrderItemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  OrderItemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema,
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
            z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
            z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
            z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
            z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
            z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array(),
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
                OrderItemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  OrderItemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema,
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
                OrderItemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  OrderItemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema,
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
            z.lazy(() => OrderItemScalarWhereInputObjectSchema),
            z.lazy(() => OrderItemScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const OrderItemUncheckedUpdateManyWithoutMerchandiseNestedInputObjectSchema =
  Schema;
