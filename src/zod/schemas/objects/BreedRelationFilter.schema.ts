import { z } from 'zod';
import { breedWhereInputObjectSchema } from './breedWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedRelationFilter> = z
  .object({
    is: z
      .lazy(() => breedWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => breedWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BreedRelationFilterObjectSchema = Schema;
