import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemORDERIDANIMALIDCompoundUniqueInput> =
  z
    .object({
      ORDERID: z.number(),
      ANIMALID: z.number(),
    })
    .strict();

export const AnimalOrderItemORDERIDANIMALIDCompoundUniqueInputObjectSchema =
  Schema;
