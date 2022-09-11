import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { supplierOrderByWithRelationInputObjectSchema } from './supplierOrderByWithRelationInput.schema';
import { employeeOrderByWithRelationInputObjectSchema } from './employeeOrderByWithRelationInput.schema';
import { animalorderitemOrderByRelationAggregateInputObjectSchema } from './animalorderitemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderOrderByWithRelationInput> = z
  .object({
    ORDERID: z.lazy(() => SortOrderSchema).optional(),
    ORDERDATE: z.lazy(() => SortOrderSchema).optional(),
    RECEIVEDATE: z.lazy(() => SortOrderSchema).optional(),
    SUPPLIERID: z.lazy(() => SortOrderSchema).optional(),
    SHIPPINGCOST: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    supplier: z
      .lazy(() => supplierOrderByWithRelationInputObjectSchema)
      .optional(),
    employee: z
      .lazy(() => employeeOrderByWithRelationInputObjectSchema)
      .optional(),
    animalorderitem: z
      .lazy(() => animalorderitemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const animalorderOrderByWithRelationInputObjectSchema = Schema;
