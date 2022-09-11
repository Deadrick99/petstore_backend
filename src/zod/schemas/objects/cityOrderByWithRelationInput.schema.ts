import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { customerOrderByRelationAggregateInputObjectSchema } from './customerOrderByRelationAggregateInput.schema';
import { employeeOrderByRelationAggregateInputObjectSchema } from './employeeOrderByRelationAggregateInput.schema';
import { supplierOrderByRelationAggregateInputObjectSchema } from './supplierOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityOrderByWithRelationInput> = z
  .object({
    CITYID: z.lazy(() => SortOrderSchema).optional(),
    ZIPCODE: z.lazy(() => SortOrderSchema).optional(),
    CITY: z.lazy(() => SortOrderSchema).optional(),
    STATE: z.lazy(() => SortOrderSchema).optional(),
    AREACODE: z.lazy(() => SortOrderSchema).optional(),
    POPULATION1990: z.lazy(() => SortOrderSchema).optional(),
    POPULATION1980: z.lazy(() => SortOrderSchema).optional(),
    COUNTRY: z.lazy(() => SortOrderSchema).optional(),
    LATITUDE: z.lazy(() => SortOrderSchema).optional(),
    LONGITUDE: z.lazy(() => SortOrderSchema).optional(),
    customer: z
      .lazy(() => customerOrderByRelationAggregateInputObjectSchema)
      .optional(),
    employee: z
      .lazy(() => employeeOrderByRelationAggregateInputObjectSchema)
      .optional(),
    supplier: z
      .lazy(() => supplierOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const cityOrderByWithRelationInputObjectSchema = Schema;
