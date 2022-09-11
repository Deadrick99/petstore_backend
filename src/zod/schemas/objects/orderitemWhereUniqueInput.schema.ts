import { z } from 'zod';
import { orderitemPONUMBERITEMIDCompoundUniqueInputObjectSchema } from './orderitemPONUMBERITEMIDCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemWhereUniqueInput> = z
  .object({
    PONUMBER_ITEMID: z
      .lazy(() => orderitemPONUMBERITEMIDCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const orderitemWhereUniqueInputObjectSchema = Schema;
