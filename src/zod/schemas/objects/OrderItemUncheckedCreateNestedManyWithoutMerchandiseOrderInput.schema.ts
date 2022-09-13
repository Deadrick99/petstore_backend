import { z } from 'zod';
import { OrderItemCreateWithoutMerchandiseOrderInputObjectSchema } from './OrderItemCreateWithoutMerchandiseOrderInput.schema';
import { OrderItemUncheckedCreateWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUncheckedCreateWithoutMerchandiseOrderInput.schema';
import { OrderItemCreateOrConnectWithoutMerchandiseOrderInputObjectSchema } from './OrderItemCreateOrConnectWithoutMerchandiseOrderInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutMerchandiseOrderInput> =
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
        connect: z
          .union([
            z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
            z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const OrderItemUncheckedCreateNestedManyWithoutMerchandiseOrderInputObjectSchema =
  Schema;
