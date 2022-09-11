import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUncheckedCreateWithoutSaleInput> = z
  .object({
    ITEMID: z.number(),
    QUANTITY: z.number().optional().nullable(),
    SALEPRICE: z.number().optional().nullable(),
  })
  .strict();

export const saleitemUncheckedCreateWithoutSaleInputObjectSchema = Schema;
