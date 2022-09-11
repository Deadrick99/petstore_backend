import { z } from 'zod';
import { animalorderWhereInputObjectSchema } from './animalorderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalorderRelationFilter> = z
  .object({
    is: z.lazy(() => animalorderWhereInputObjectSchema).optional(),
    isNot: z.lazy(() => animalorderWhereInputObjectSchema).optional(),
  })
  .strict();

export const AnimalorderRelationFilterObjectSchema = Schema;
