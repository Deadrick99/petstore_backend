import { z } from 'zod';
import { cityCreateNestedOneWithoutCustomerInputObjectSchema } from './cityCreateNestedOneWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerCreateWithoutSaleInput> = z
  .object({
    CUSTOMERID: z.number(),
    PHONE: z.string().optional().nullable(),
    FIRSTNAME: z.string().optional().nullable(),
    LASTNAME: z.string().optional().nullable(),
    ADDRESS: z.string().optional().nullable(),
    ZIPCODE: z.string().optional().nullable(),
    city: z
      .lazy(() => cityCreateNestedOneWithoutCustomerInputObjectSchema)
      .optional(),
  })
  .strict();

export const customerCreateWithoutSaleInputObjectSchema = Schema;
