import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CustomerOrderByWithRelationInputObjectSchema } from './CustomerOrderByWithRelationInput.schema';
import { EmployeeOrderByWithRelationInputObjectSchema } from './EmployeeOrderByWithRelationInput.schema';
import { SaleAnimalOrderByRelationAggregateInputObjectSchema } from './SaleAnimalOrderByRelationAggregateInput.schema';
import { SaleItemOrderByRelationAggregateInputObjectSchema } from './SaleItemOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleOrderByWithRelationInput> = z
  .object({
    SALEID: z.lazy(() => SortOrderSchema).optional(),
    SALEDATE: z.lazy(() => SortOrderSchema).optional(),
    EMPLOYEEID: z.lazy(() => SortOrderSchema).optional(),
    CUSTOMERID: z.lazy(() => SortOrderSchema).optional(),
    SALESTAX: z.lazy(() => SortOrderSchema).optional(),
    Customer: z
      .lazy(() => CustomerOrderByWithRelationInputObjectSchema)
      .optional(),
    Employee: z
      .lazy(() => EmployeeOrderByWithRelationInputObjectSchema)
      .optional(),
    SaleAnimal: z
      .lazy(() => SaleAnimalOrderByRelationAggregateInputObjectSchema)
      .optional(),
    SaleItem: z
      .lazy(() => SaleItemOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleOrderByWithRelationInputObjectSchema = Schema;
