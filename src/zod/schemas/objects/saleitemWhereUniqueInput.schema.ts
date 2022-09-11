import { z } from 'zod';
import { saleitemSALEIDITEMIDCompoundUniqueInputObjectSchema } from './saleitemSALEIDITEMIDCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemWhereUniqueInput> = z
  .object({
    SALEID_ITEMID: z
      .lazy(() => saleitemSALEIDITEMIDCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleitemWhereUniqueInputObjectSchema = Schema;
