import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemSALEIDITEMIDCompoundUniqueInput> = z
  .object({
    SALEID: z.number(),
    ITEMID: z.number(),
  })
  .strict();

export const SaleItemSALEIDITEMIDCompoundUniqueInputObjectSchema = Schema;
