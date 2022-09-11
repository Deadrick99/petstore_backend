import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customeraccountOrderByWithRelationInput> = z
  .object({
    ACCOUNTID: z.lazy(() => SortOrderSchema).optional(),
    CUSTOMERID: z.lazy(() => SortOrderSchema).optional(),
    BALANCE: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const customeraccountOrderByWithRelationInputObjectSchema = Schema;
