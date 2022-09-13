import { z } from 'zod';
import { BreedWhereInputObjectSchema } from './BreedWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedListRelationFilter> = z
  .object({
    every: z.lazy(() => BreedWhereInputObjectSchema).optional(),
    some: z.lazy(() => BreedWhereInputObjectSchema).optional(),
    none: z.lazy(() => BreedWhereInputObjectSchema).optional(),
  })
  .strict();

export const BreedListRelationFilterObjectSchema = Schema;
