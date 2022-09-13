import { z } from 'zod';
import { SaleAnimalWhereInputObjectSchema } from './SaleAnimalWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalListRelationFilter> = z
  .object({
    every: z.lazy(() => SaleAnimalWhereInputObjectSchema).optional(),
    some: z.lazy(() => SaleAnimalWhereInputObjectSchema).optional(),
    none: z.lazy(() => SaleAnimalWhereInputObjectSchema).optional(),
  })
  .strict();

export const SaleAnimalListRelationFilterObjectSchema = Schema;
