import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUncheckedCreateWithoutMerchandiseInput> =
  z
    .object({
      PONUMBER: z.number(),
      QUANTITY: z.number().optional().nullable(),
      COST: z.number().optional().nullable(),
    })
    .strict();

export const OrderItemUncheckedCreateWithoutMerchandiseInputObjectSchema =
  Schema;
