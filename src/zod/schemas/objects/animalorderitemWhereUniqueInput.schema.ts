import { z } from 'zod';
import { animalorderitemORDERIDANIMALIDCompoundUniqueInputObjectSchema } from './animalorderitemORDERIDANIMALIDCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemWhereUniqueInput> = z
  .object({
    ORDERID_ANIMALID: z
      .lazy(() => animalorderitemORDERIDANIMALIDCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const animalorderitemWhereUniqueInputObjectSchema = Schema;
