import { z } from 'zod';
import { SaleItemSALEIDITEMIDCompoundUniqueInputObjectSchema } from './SaleItemSALEIDITEMIDCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemWhereUniqueInput> = z
  .object({
    SALEID_ITEMID: z
      .lazy(() => SaleItemSALEIDITEMIDCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleItemWhereUniqueInputObjectSchema = Schema;
