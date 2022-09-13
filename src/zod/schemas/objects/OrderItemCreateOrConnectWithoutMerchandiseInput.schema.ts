import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemCreateWithoutMerchandiseInputObjectSchema } from './OrderItemCreateWithoutMerchandiseInput.schema';
import { OrderItemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './OrderItemUncheckedCreateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemCreateOrConnectWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => OrderItemCreateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => OrderItemUncheckedCreateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OrderItemCreateOrConnectWithoutMerchandiseInputObjectSchema =
  Schema;
