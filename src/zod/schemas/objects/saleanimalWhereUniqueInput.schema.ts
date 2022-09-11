import { z } from 'zod';
import { saleanimalSALEIDANIMALIDCompoundUniqueInputObjectSchema } from './saleanimalSALEIDANIMALIDCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalWhereUniqueInput> = z
  .object({
    SALEID_ANIMALID: z
      .lazy(() => saleanimalSALEIDANIMALIDCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleanimalWhereUniqueInputObjectSchema = Schema;
