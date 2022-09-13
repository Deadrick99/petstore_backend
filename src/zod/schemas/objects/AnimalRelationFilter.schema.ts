import { z } from 'zod';
import { AnimalWhereInputObjectSchema } from './AnimalWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalRelationFilter> = z
  .object({
    is: z.lazy(() => AnimalWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => AnimalWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnimalRelationFilterObjectSchema = Schema;
