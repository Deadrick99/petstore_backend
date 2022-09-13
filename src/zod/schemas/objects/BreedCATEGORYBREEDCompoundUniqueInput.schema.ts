import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedCATEGORYBREEDCompoundUniqueInput> = z
  .object({
    CATEGORY: z.string(),
    BREED: z.string(),
  })
  .strict();

export const BreedCATEGORYBREEDCompoundUniqueInputObjectSchema = Schema;
