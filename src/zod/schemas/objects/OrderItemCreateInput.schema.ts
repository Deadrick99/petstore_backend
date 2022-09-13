import { z } from 'zod';
import { MerchandiseCreateNestedOneWithoutOrderItemInputObjectSchema } from './MerchandiseCreateNestedOneWithoutOrderItemInput.schema';
import { MerchandiseOrderCreateNestedOneWithoutOrderItemInputObjectSchema } from './MerchandiseOrderCreateNestedOneWithoutOrderItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemCreateInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    COST: z.number().optional().nullable(),
    Merchandise: z.lazy(
      () => MerchandiseCreateNestedOneWithoutOrderItemInputObjectSchema,
    ),
    MerchandiseOrder: z.lazy(
      () => MerchandiseOrderCreateNestedOneWithoutOrderItemInputObjectSchema,
    ),
  })
  .strict();

export const OrderItemCreateInputObjectSchema = Schema;
