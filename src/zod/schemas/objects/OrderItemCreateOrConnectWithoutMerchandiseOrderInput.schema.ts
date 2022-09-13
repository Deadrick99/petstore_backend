import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutMerchandiseOrderInputObjectSchema } from './OrderItemCreateWithoutMerchandiseOrderInput.schema';
import { OrderItemUncheckedCreateWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUncheckedCreateWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutMerchandiseOrderInput> =
  z
    .object({
      where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => OrderItemCreateWithoutMerchandiseOrderInputObjectSchema),
        z.lazy(
          () =>
            OrderItemUncheckedCreateWithoutMerchandiseOrderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OrderItemCreateOrConnectWithoutMerchandiseOrderInputObjectSchema =
  Schema;
