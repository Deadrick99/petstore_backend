import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { cityOrderByWithRelationInputObjectSchema } from './cityOrderByWithRelationInput.schema';
import { saleOrderByRelationAggregateInputObjectSchema } from './saleOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerOrderByWithRelationInput> = z
  .object({
    CUSTOMERID: z.lazy(() => SortOrderSchema).optional(),
    PHONE: z.lazy(() => SortOrderSchema).optional(),
    FIRSTNAME: z.lazy(() => SortOrderSchema).optional(),
    LASTNAME: z.lazy(() => SortOrderSchema).optional(),
    ADDRESS: z.lazy(() => SortOrderSchema).optional(),
    ZIPCODE: z.lazy(() => SortOrderSchema).optional(),
    CITYID: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => cityOrderByWithRelationInputObjectSchema).optional(),
    sale: z
      .lazy(() => saleOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const customerOrderByWithRelationInputObjectSchema = Schema;
