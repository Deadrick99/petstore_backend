import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUncheckedCreateInput> = z
  .object({
    SALEID: z.number(),
    ITEMID: z.number(),
    QUANTITY: z.number().optional().nullable(),
    SALEPRICE: z.number().optional().nullable(),
  })
  .strict();

export const saleitemUncheckedCreateInputObjectSchema = Schema;
