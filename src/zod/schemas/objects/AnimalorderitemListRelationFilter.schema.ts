import { z } from 'zod';
import { animalorderitemWhereInputObjectSchema } from './animalorderitemWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalorderitemListRelationFilter> = z
  .object({
    every: z.lazy(() => animalorderitemWhereInputObjectSchema).optional(),
    some: z.lazy(() => animalorderitemWhereInputObjectSchema).optional(),
    none: z.lazy(() => animalorderitemWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnimalorderitemListRelationFilterObjectSchema = Schema;
