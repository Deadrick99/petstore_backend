import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { AnimalOrderByWithRelationInputObjectSchema } from './AnimalOrderByWithRelationInput.schema';
import { SaleOrderByWithRelationInputObjectSchema } from './SaleOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalOrderByWithRelationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    SALEPRICE: z.lazy(() => SortOrderSchema).optional(),
    Animal: z.lazy(() => AnimalOrderByWithRelationInputObjectSchema).optional(),
    Sale: z.lazy(() => SaleOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const SaleAnimalOrderByWithRelationInputObjectSchema = Schema;
