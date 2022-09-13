import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SaleOrderByWithRelationInputObjectSchema } from './SaleOrderByWithRelationInput.schema';
import { AnimalOrderByWithRelationInputObjectSchema } from './AnimalOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalOrderByWithRelationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    ANIMALID: z.lazy(() => SortOrderSchema).optional(),
    SALEPRICE: z.lazy(() => SortOrderSchema).optional(),
    Sale: z.lazy(() => SaleOrderByWithRelationInputObjectSchema).optional(),
    Animal: z.lazy(() => AnimalOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const SaleAnimalOrderByWithRelationInputObjectSchema = Schema;
