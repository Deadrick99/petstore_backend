import { z } from 'zod';
import { saleUncheckedCreateNestedManyWithoutCustomerInputObjectSchema } from './saleUncheckedCreateNestedManyWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerUncheckedCreateWithoutCityInput> = z
  .object({
    CUSTOMERID: z.number(),
    PHONE: z.string().optional().nullable(),
    FIRSTNAME: z.string().optional().nullable(),
    LASTNAME: z.string().optional().nullable(),
    ADDRESS: z.string().optional().nullable(),
    ZIPCODE: z.string().optional().nullable(),
    sale: z
      .lazy(() => saleUncheckedCreateNestedManyWithoutCustomerInputObjectSchema)
      .optional(),
  })
  .strict();

export const customerUncheckedCreateWithoutCityInputObjectSchema = Schema;
