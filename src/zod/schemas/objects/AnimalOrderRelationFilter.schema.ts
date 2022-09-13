import { z } from 'zod';
import { AnimalOrderWhereInputObjectSchema } from './AnimalOrderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderRelationFilter> = z
  .object({
    is: z.lazy(() => AnimalOrderWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => AnimalOrderWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnimalOrderRelationFilterObjectSchema = Schema;
