import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { supplierOrderByWithRelationInputObjectSchema } from './supplierOrderByWithRelationInput.schema';
import { employeeOrderByWithRelationInputObjectSchema } from './employeeOrderByWithRelationInput.schema';
import { orderitemOrderByRelationAggregateInputObjectSchema } from './orderitemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderOrderByWithRelationInput> = z
  .object({
    PONUMBER: z.lazy(() => SortOrderSchema).optional(),
    ORDERDATE: z.lazy(() => SortOrderSchema).optional(),
    RECEIVEDATE: z.lazy(() => SortOrderSchema).optional(),
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    SHIPPINGCOST: z.lazy(() => SortOrderSchema).optional(),
    supplier: z
      .lazy(() => supplierOrderByWithRelationInputObjectSchema)
      .optional(),
    employee: z
      .lazy(() => employeeOrderByWithRelationInputObjectSchema)
      .optional(),
    orderitem: z
      .lazy(() => orderitemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const merchandiseorderOrderByWithRelationInputObjectSchema = Schema;
