import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalSALEIDANIMALIDCompoundUniqueInput> = z
  .object({
    SALEID: z.number(),
    ANIMALID: z.number(),
  })
  .strict();

export const SaleAnimalSALEIDANIMALIDCompoundUniqueInputObjectSchema = Schema;
