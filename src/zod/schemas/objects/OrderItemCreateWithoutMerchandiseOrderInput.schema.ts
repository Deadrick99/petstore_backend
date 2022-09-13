import { z } from 'zod';
import { MerchandiseCreateNestedOneWithoutOrderItemInputObjectSchema } from './MerchandiseCreateNestedOneWithoutOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemCreateWithoutMerchandiseOrderInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    COST: z.number().optional().nullable(),
    Merchandise: z.lazy(
      () => MerchandiseCreateNestedOneWithoutOrderItemInputObjectSchema,
    ),
  })
  .strict();

export const OrderItemCreateWithoutMerchandiseOrderInputObjectSchema = Schema;
