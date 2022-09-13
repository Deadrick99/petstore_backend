import { z } from 'zod';
import { BreedCATEGORYBREEDCompoundUniqueInputObjectSchema } from './BreedCATEGORYBREEDCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedWhereUniqueInput> = z
  .object({
    CATEGORY_BREED: z
      .lazy(() => BreedCATEGORYBREEDCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const BreedWhereUniqueInputObjectSchema = Schema;
