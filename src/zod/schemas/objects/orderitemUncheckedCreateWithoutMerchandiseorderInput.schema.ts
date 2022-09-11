import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemUncheckedCreateWithoutMerchandiseorderInput> =
  z
    .object({
      ITEMID: z.number(),
      QUANTITY: z.number().optional().nullable(),
      COST: z.number().optional().nullable(),
    })
    .strict();

export const orderitemUncheckedCreateWithoutMerchandiseorderInputObjectSchema =
  Schema;
