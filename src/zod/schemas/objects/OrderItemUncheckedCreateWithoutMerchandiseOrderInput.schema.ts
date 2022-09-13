import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutMerchandiseOrderInput> =
  z
    .object({
      ITEMID: z.number(),
      QUANTITY: z.number().optional().nullable(),
      COST: z.number().optional().nullable(),
    })
    .strict();

export const OrderItemUncheckedCreateWithoutMerchandiseOrderInputObjectSchema =
  Schema;
