import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { employeeOrderByWithRelationInputObjectSchema } from './employeeOrderByWithRelationInput.schema';
import { customerOrderByWithRelationInputObjectSchema } from './customerOrderByWithRelationInput.schema';
import { saleanimalOrderByRelationAggregateInputObjectSchema } from './saleanimalOrderByRelationAggregateInput.schema';
import { saleitemOrderByRelationAggregateInputObjectSchema } from './saleitemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleOrderByWithRelationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    SALEDATE: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    CUSTOMERID: z.lazy(() => SortOrderSchema).optional(),
    SALESTAX: z.lazy(() => SortOrderSchema).optional(),
    employee: z
      .lazy(() => employeeOrderByWithRelationInputObjectSchema)
      .optional(),
    customer: z
      .lazy(() => customerOrderByWithRelationInputObjectSchema)
      .optional(),
    saleanimal: z
      .lazy(() => saleanimalOrderByRelationAggregateInputObjectSchema)
      .optional(),
    saleitem: z
      .lazy(() => saleitemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleOrderByWithRelationInputObjectSchema = Schema;
