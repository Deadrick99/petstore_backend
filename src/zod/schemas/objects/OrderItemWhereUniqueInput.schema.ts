import { z } from 'zod';
import { OrderItemPONUMBERITEMIDCompoundUniqueInputObjectSchema } from './OrderItemPONUMBERITEMIDCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemWhereUniqueInput> = z
  .object({
    PONUMBER_ITEMID: z
      .lazy(() => OrderItemPONUMBERITEMIDCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const OrderItemWhereUniqueInputObjectSchema = Schema;
