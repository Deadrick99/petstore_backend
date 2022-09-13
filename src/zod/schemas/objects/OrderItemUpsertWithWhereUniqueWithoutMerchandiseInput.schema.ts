import { z } from 'zod';
import { OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutMerchandiseInputObjectSchema } from './OrderItemUpdateWithoutMerchandiseInput.schema';
import { OrderItemUncheckedUpdateWithoutMerchandiseInputObjectSchema } from './OrderItemUncheckedUpdateWithoutMerchandiseInput.schema';
import { OrderItemCreateWithoutMerchandiseInputObjectSchema } from './OrderItemCreateWithoutMerchandiseInput.schema';
import { OrderItemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './OrderItemUncheckedCreateWithoutMerchandiseInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpsertWithWhereUniqueWithoutMerchandiseInput> =
  z
    .object({
      where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => OrderItemUpdateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => OrderItemUncheckedUpdateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => OrderItemCreateWithoutMerchandiseInputObjectSchema),
        z.lazy(
          () => OrderItemUncheckedCreateWithoutMerchandiseInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const OrderItemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema =
  Schema;
