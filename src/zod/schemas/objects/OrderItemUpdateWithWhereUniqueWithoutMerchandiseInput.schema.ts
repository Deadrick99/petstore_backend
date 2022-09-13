import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutMerchandiseInputObjectSchema } from './OrderItemUpdateWithoutMerchandiseInput.schema';
import { OrderItemUncheckedUpdateWithoutMerchandiseInputObjectSchema } from './OrderItemUncheckedUpdateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpdateWithWhereUniqueWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => OrderItemUpdateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => OrderItemUncheckedUpdateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OrderItemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema =
  Schema;
