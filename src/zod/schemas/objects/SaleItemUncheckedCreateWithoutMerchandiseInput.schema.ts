import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUncheckedCreateWithoutMerchandiseInput> =
  z
    .object({
      SALEID: z.number(),
      QUANTITY: z.number().optional().nullable(),
      SALEPRICE: z.number().optional().nullable(),
    })
    .strict();

export const SaleItemUncheckedCreateWithoutMerchandiseInputObjectSchema =
  Schema;
