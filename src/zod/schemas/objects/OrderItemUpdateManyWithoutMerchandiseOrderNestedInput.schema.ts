import { z } from 'zod';
import { OrderItemCreateWithoutMerchandiseOrderInputObjectSchema } from './OrderItemCreateWithoutMerchandiseOrderInput.schema';
import { OrderItemUncheckedCreateWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUncheckedCreateWithoutMerchandiseOrderInput.schema';
import { OrderItemCreateOrConnectWithoutMerchandiseOrderInputObjectSchema } from './OrderItemCreateOrConnectWithoutMerchandiseOrderInput.schema';
import { OrderItemUpsertWithWhereUniqueWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUpsertWithWhereUniqueWithoutMerchandiseOrderInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithWhereUniqueWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUpdateWithWhereUniqueWithoutMerchandiseOrderInput.schema';
import { OrderItemUpdateManyWithWhereWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUpdateManyWithWhereWithoutMerchandiseOrderInput.schema';
import { OrderItemScalarWhereInputObjectSchema } from './OrderItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpdateManyWithoutMerchandiseOrderNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => OrderItemCreateWithoutMerchandiseOrderInputObjectSchema,
            ),
            z
              .lazy(
                () => OrderItemCreateWithoutMerchandiseOrderInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                OrderItemUncheckedCreateWithoutMerchandiseOrderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  OrderItemUncheckedCreateWithoutMerchandiseOrderInputObjectSchema,
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
                OrderItemCreateOrConnectWithoutMerchandiseOrderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  OrderItemCreateOrConnectWithoutMerchandiseOrderInputObjectSchema,
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
                OrderItemUpsertWithWhereUniqueWithoutMerchandiseOrderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  OrderItemUpsertWithWhereUniqueWithoutMerchandiseOrderInputObjectSchema,
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
                OrderItemUpdateWithWhereUniqueWithoutMerchandiseOrderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  OrderItemUpdateWithWhereUniqueWithoutMerchandiseOrderInputObjectSchema,
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
                OrderItemUpdateManyWithWhereWithoutMerchandiseOrderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  OrderItemUpdateManyWithWhereWithoutMerchandiseOrderInputObjectSchema,
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

export const OrderItemUpdateManyWithoutMerchandiseOrderNestedInputObjectSchema =
  Schema;
