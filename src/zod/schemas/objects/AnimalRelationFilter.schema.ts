import { z } from 'zod';
import { animalWhereInputObjectSchema } from './animalWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalRelationFilter> = z
  .object({
    is: z.lazy(() => animalWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => animalWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnimalRelationFilterObjectSchema = Schema;
