import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { EmployeeOrderByWithRelationInputObjectSchema } from './EmployeeOrderByWithRelationInput.schema';
import { SupplierOrderByWithRelationInputObjectSchema } from './SupplierOrderByWithRelationInput.schema';
import { OrderItemOrderByRelationAggregateInputObjectSchema } from './OrderItemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderOrderByWithRelationInput> = z
  .object({
    PONUMBER: z.lazy(() => SortOrderSchema).optional(),
    ORDERDATE: z.lazy(() => SortOrderSchema).optional(),
    RECEIVEDATE: z.lazy(() => SortOrderSchema).optional(),
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    SHIPPINGCOST: z.lazy(() => SortOrderSchema).optional(),
    Employee: z
      .lazy(() => EmployeeOrderByWithRelationInputObjectSchema)
      .optional(),
    Supplier: z
      .lazy(() => SupplierOrderByWithRelationInputObjectSchema)
      .optional(),
    OrderItem: z
      .lazy(() => OrderItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const MerchandiseOrderOrderByWithRelationInputObjectSchema = Schema;
