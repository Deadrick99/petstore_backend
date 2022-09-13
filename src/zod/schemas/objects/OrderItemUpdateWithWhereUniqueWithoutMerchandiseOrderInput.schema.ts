import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUpdateWithoutMerchandiseOrderInput.schema';
import { OrderItemUncheckedUpdateWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUncheckedUpdateWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutMerchandiseOrderInput> =
  z
    .object({
      where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => OrderItemUpdateWithoutMerchandiseOrderInputObjectSchema),
        z.lazy(
          () =>
            OrderItemUncheckedUpdateWithoutMerchandiseOrderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OrderItemUpdateWithWhereUniqueWithoutMerchandiseOrderInputObjectSchema =
  Schema;
