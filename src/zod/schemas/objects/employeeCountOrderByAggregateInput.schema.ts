import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeCountOrderByAggregateInput> = z
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
  })
  .strict();

export const employeeCountOrderByAggregateInputObjectSchema = Schema;
