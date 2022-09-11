import { z } from 'zod';
import { breedCATEGORYBREEDCompoundUniqueInputObjectSchema } from './breedCATEGORYBREEDCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.breedWhereUniqueInput> = z
  .object({
    CATEGORY_BREED: z
      .lazy(() => breedCATEGORYBREEDCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const breedWhereUniqueInputObjectSchema = Schema;
