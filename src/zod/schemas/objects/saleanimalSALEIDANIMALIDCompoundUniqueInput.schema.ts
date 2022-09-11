import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalSALEIDANIMALIDCompoundUniqueInput> = z
  .object({
    SALEID: z.number(),
    ANIMALID: z.number(),
  })
  .strict();

export const saleanimalSALEIDANIMALIDCompoundUniqueInputObjectSchema = Schema;
