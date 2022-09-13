import { z } from 'zod';
import { SaleUncheckedCreateNestedManyWithoutCustomerInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUncheckedCreateInput> = z
  .object({
    CUSTOMERID: z.number().optional(),
    PHONE: z.string().optional().nullable(),
    FIRSTNAME: z.string().optional().nullable(),
    LASTNAME: z.string().optional().nullable(),
    ADDRESS: z.string().optional().nullable(),
    ZIPCODE: z.string().optional().nullable(),
    CITYID: z.number().optional().nullable(),
    Sale: z
      .lazy(() => SaleUncheckedCreateNestedManyWithoutCustomerInputObjectSchema)
      .optional(),
  })
  .strict();

export const CustomerUncheckedCreateInputObjectSchema = Schema;
