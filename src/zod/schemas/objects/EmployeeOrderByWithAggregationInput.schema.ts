import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EmployeeCountOrderByAggregateInputObjectSchema } from './EmployeeCountOrderByAggregateInput.schema';
import { EmployeeAvgOrderByAggregateInputObjectSchema } from './EmployeeAvgOrderByAggregateInput.schema';
import { EmployeeMaxOrderByAggregateInputObjectSchema } from './EmployeeMaxOrderByAggregateInput.schema';
import { EmployeeMinOrderByAggregateInputObjectSchema } from './EmployeeMinOrderByAggregateInput.schema';
import { EmployeeSumOrderByAggregateInputObjectSchema } from './EmployeeSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeOrderByWithAggregationInput> = z
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
      .lazy(() => EmployeeCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => EmployeeAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => EmployeeMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EmployeeMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => EmployeeSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const EmployeeOrderByWithAggregationInputObjectSchema = Schema;
