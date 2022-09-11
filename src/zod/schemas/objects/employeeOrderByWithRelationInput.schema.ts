import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { cityOrderByWithRelationInputObjectSchema } from './cityOrderByWithRelationInput.schema';
import { animalorderOrderByRelationAggregateInputObjectSchema } from './animalorderOrderByRelationAggregateInput.schema';
import { merchandiseorderOrderByRelationAggregateInputObjectSchema } from './merchandiseorderOrderByRelationAggregateInput.schema';
import { saleOrderByRelationAggregateInputObjectSchema } from './saleOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeOrderByWithRelationInput> = z
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
    city: z.lazy(() => cityOrderByWithRelationInputObjectSchema).optional(),
    animalorder: z
      .lazy(() => animalorderOrderByRelationAggregateInputObjectSchema)
      .optional(),
    merchandiseorder: z
      .lazy(() => merchandiseorderOrderByRelationAggregateInputObjectSchema)
      .optional(),
    sale: z
      .lazy(() => saleOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const employeeOrderByWithRelationInputObjectSchema = Schema;
