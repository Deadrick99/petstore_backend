import { z } from 'zod';
import { SaleAnimalSALEIDANIMALIDCompoundUniqueInputObjectSchema } from './SaleAnimalSALEIDANIMALIDCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalWhereUniqueInput> = z
  .object({
    SALEID_ANIMALID: z
      .lazy(() => SaleAnimalSALEIDANIMALIDCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleAnimalWhereUniqueInputObjectSchema = Schema;
