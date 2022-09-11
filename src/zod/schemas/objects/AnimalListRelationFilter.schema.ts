import { z } from 'zod';
import { animalWhereInputObjectSchema } from './animalWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalListRelationFilter> = z
  .object({
    every: z.lazy(() => animalWhereInputObjectSchema).optional(),
    some: z.lazy(() => animalWhereInputObjectSchema).optional(),
    none: z.lazy(() => animalWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnimalListRelationFilterObjectSchema = Schema;
