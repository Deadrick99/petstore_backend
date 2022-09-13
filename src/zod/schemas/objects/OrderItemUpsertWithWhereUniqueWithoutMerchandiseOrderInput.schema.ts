import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUpdateWithoutMerchandiseOrderInput.schema';
import { OrderItemUncheckedUpdateWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUncheckedUpdateWithoutMerchandiseOrderInput.schema';
import { OrderItemCreateWithoutMerchandiseOrderInputObjectSchema } from './OrderItemCreateWithoutMerchandiseOrderInput.schema';
import { OrderItemUncheckedCreateWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUncheckedCreateWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutMerchandiseOrderInput> =
  z
    .object({
      where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => OrderItemUpdateWithoutMerchandiseOrderInputObjectSchema),
        z.lazy(
          () =>
            OrderItemUncheckedUpdateWithoutMerchandiseOrderInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => OrderItemCreateWithoutMerchandiseOrderInputObjectSchema),
        z.lazy(
          () =>
            OrderItemUncheckedCreateWithoutMerchandiseOrderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OrderItemUpsertWithWhereUniqueWithoutMerchandiseOrderInputObjectSchema =
  Schema;
