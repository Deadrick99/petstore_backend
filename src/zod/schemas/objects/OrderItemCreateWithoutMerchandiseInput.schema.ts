import { z } from 'zod';
import { MerchandiseOrderCreateNestedOneWithoutOrderItemInputObjectSchema } from './MerchandiseOrderCreateNestedOneWithoutOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemCreateWithoutMerchandiseInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    COST: z.number().optional().nullable(),
    MerchandiseOrder: z.lazy(
      () => MerchandiseOrderCreateNestedOneWithoutOrderItemInputObjectSchema,
    ),
  })
  .strict();

export const OrderItemCreateWithoutMerchandiseInputObjectSchema = Schema;
