import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierCountOrderByAggregateInput> = z
  .object({
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    NAME: z.lazy(() => SortOrderSchema).optional(),
    CONTACTNAME: z.lazy(() => SortOrderSchema).optional(),
    PHONE: z.lazy(() => SortOrderSchema).optional(),
    ADDRESS: z.lazy(() => SortOrderSchema).optional(),
    ZIPCODE: z.lazy(() => SortOrderSchema).optional(),
    CITYID: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const SupplierCountOrderByAggregateInputObjectSchema = Schema;
