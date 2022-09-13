import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CityOrderByWithRelationInputObjectSchema } from './CityOrderByWithRelationInput.schema';
import { SaleOrderByRelationAggregateInputObjectSchema } from './SaleOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerOrderByWithRelationInput> = z
  .object({
    CUSTOMERID: z.lazy(() => SortOrderSchema).optional(),
    PHONE: z.lazy(() => SortOrderSchema).optional(),
    FIRSTNAME: z.lazy(() => SortOrderSchema).optional(),
    LASTNAME: z.lazy(() => SortOrderSchema).optional(),
    ADDRESS: z.lazy(() => SortOrderSchema).optional(),
    ZIPCODE: z.lazy(() => SortOrderSchema).optional(),
    CITYID: z.lazy(() => SortOrderSchema).optional(),
    City: z.lazy(() => CityOrderByWithRelationInputObjectSchema).optional(),
    Sale: z
      .lazy(() => SaleOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const CustomerOrderByWithRelationInputObjectSchema = Schema;
