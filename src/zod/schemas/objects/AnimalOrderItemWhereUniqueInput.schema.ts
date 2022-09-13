import { z } from 'zod';
import { AnimalOrderItemORDERIDANIMALIDCompoundUniqueInputObjectSchema } from './AnimalOrderItemORDERIDANIMALIDCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemWhereUniqueInput> = z
  .object({
    ORDERID_ANIMALID: z
      .lazy(() => AnimalOrderItemORDERIDANIMALIDCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnimalOrderItemWhereUniqueInputObjectSchema = Schema;
