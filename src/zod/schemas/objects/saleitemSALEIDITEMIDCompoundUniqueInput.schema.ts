import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemSALEIDITEMIDCompoundUniqueInput> = z
  .object({
    SALEID: z.number(),
    ITEMID: z.number(),
  })
  .strict();

export const saleitemSALEIDITEMIDCompoundUniqueInputObjectSchema = Schema;
