import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemPONUMBERITEMIDCompoundUniqueInput> = z
  .object({
    PONUMBER: z.number(),
    ITEMID: z.number(),
  })
  .strict();

export const OrderItemPONUMBERITEMIDCompoundUniqueInputObjectSchema = Schema;
