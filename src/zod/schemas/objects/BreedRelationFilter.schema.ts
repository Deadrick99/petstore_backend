import { z } from 'zod';
import { BreedWhereInputObjectSchema } from './BreedWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedRelationFilter> = z
  .object({
    is: z
      .lazy(() => BreedWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BreedWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BreedRelationFilterObjectSchema = Schema;
