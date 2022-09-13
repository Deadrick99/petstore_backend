import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CityOrderByWithRelationInputObjectSchema } from './CityOrderByWithRelationInput.schema';
import { AnimalOrderOrderByRelationAggregateInputObjectSchema } from './AnimalOrderOrderByRelationAggregateInput.schema';
import { MerchandiseOrderOrderByRelationAggregateInputObjectSchema } from './MerchandiseOrderOrderByRelationAggregateInput.schema';
import { SaleOrderByRelationAggregateInputObjectSchema } from './SaleOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeOrderByWithRelationInput> = z
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
    City: z.lazy(() => CityOrderByWithRelationInputObjectSchema).optional(),
    AnimalOrder: z
      .lazy(() => AnimalOrderOrderByRelationAggregateInputObjectSchema)
      .optional(),
    MerchandiseOrder: z
      .lazy(() => MerchandiseOrderOrderByRelationAggregateInputObjectSchema)
      .optional(),
    Sale: z
      .lazy(() => SaleOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const EmployeeOrderByWithRelationInputObjectSchema = Schema;
