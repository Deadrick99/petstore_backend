import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { cityOrderByWithRelationInputObjectSchema } from './cityOrderByWithRelationInput.schema';
import { animalorderOrderByRelationAggregateInputObjectSchema } from './animalorderOrderByRelationAggregateInput.schema';
import { merchandiseorderOrderByRelationAggregateInputObjectSchema } from './merchandiseorderOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierOrderByWithRelationInput> = z
  .object({
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    NAME: z.lazy(() => SortOrderSchema).optional(),
    CONTACTNAME: z.lazy(() => SortOrderSchema).optional(),
    PHONE: z.lazy(() => SortOrderSchema).optional(),
    ADDRESS: z.lazy(() => SortOrderSchema).optional(),
    ZIPCODE: z.lazy(() => SortOrderSchema).optional(),
    CITYID: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => cityOrderByWithRelationInputObjectSchema).optional(),
    animalorder: z
      .lazy(() => animalorderOrderByRelationAggregateInputObjectSchema)
      .optional(),
    merchandiseorder: z
      .lazy(() => merchandiseorderOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const supplierOrderByWithRelationInputObjectSchema = Schema;
