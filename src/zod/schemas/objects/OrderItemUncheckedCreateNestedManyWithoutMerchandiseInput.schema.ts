import { z } from 'zod';
import { OrderItemCreateWithoutMerchandiseInputObjectSchema } from './OrderItemCreateWithoutMerchandiseInput.schema';
import { OrderItemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './OrderItemUncheckedCreateWithoutMerchandiseInput.schema';
import { OrderItemCreateOrConnectWithoutMerchandiseInputObjectSchema } from './OrderItemCreateOrConnectWithoutMerchandiseInput.schema';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUncheckedCreateNestedManyWithoutMerchandiseInput> =
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
        connect: z
          .union([
            z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
            z.lazy(() => OrderItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const OrderItemUncheckedCreateNestedManyWithoutMerchandiseInputObjectSchema =
  Schema;
