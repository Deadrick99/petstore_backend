import { z } from 'zod';
import { animalorderWhereInputObjectSchema } from './animalorderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalorderListRelationFilter> = z
  .object({
    every: z.lazy(() => animalorderWhereInputObjectSchema).optional(),
    some: z.lazy(() => animalorderWhereInputObjectSchema).optional(),
    none: z.lazy(() => animalorderWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnimalorderListRelationFilterObjectSchema = Schema;
