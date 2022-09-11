import { z } from 'zod';
import { breedWhereInputObjectSchema } from './breedWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedListRelationFilter> = z
  .object({
    every: z.lazy(() => breedWhereInputObjectSchema).optional(),
    some: z.lazy(() => breedWhereInputObjectSchema).optional(),
    none: z.lazy(() => breedWhereInputObjectSchema).optional(),
  })
  .strict();

export const BreedListRelationFilterObjectSchema = Schema;
