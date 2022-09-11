import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemORDERIDANIMALIDCompoundUniqueInput> =
  z
    .object({
      ORDERID: z.number(),
      ANIMALID: z.number(),
    })
    .strict();

export const animalorderitemORDERIDANIMALIDCompoundUniqueInputObjectSchema =
  Schema;
