import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { employeeCountOrderByAggregateInputObjectSchema } from './employeeCountOrderByAggregateInput.schema';
import { employeeAvgOrderByAggregateInputObjectSchema } from './employeeAvgOrderByAggregateInput.schema';
import { employeeMaxOrderByAggregateInputObjectSchema } from './employeeMaxOrderByAggregateInput.schema';
import { employeeMinOrderByAggregateInputObjectSchema } from './employeeMinOrderByAggregateInput.schema';
import { employeeSumOrderByAggregateInputObjectSchema } from './employeeSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeOrderByWithAggregationInput> = z
  .object({
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    LASTNAME: z.lazy(() => SortOrderSchema).optional(),
    FIRSTNAME: z.lazy(() => SortOrderSchema).optional(),
    PHONE: z.lazy(() => SortOrderSchema).optional(),
    ADDRESS: z.lazy(() => SortOrderSchema).optional(),
    ZIPCODE: z.lazy(() => SortOrderSchema).optional(),
    CITYID: z.lazy(() => SortOrderSchema).optional(),
    TAXPAYERID: z.lazy(() => SortOrderSchema).optional(),
    DATEHIRED: z.lazy(() => SortOrderSchema).optional(),
    DATERELEASED: z.lazy(() => SortOrderSchema).optional(),
    MANAGERID: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEELEVEL: z.lazy(() => SortOrderSchema).optional(),
    TITLE: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => employeeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => employeeAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => employeeMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => employeeMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => employeeSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const employeeOrderByWithAggregationInputObjectSchema = Schema;
