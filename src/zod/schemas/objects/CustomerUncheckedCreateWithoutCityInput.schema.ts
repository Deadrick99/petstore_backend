import { z } from 'zod';
import { SaleUncheckedCreateNestedManyWithoutCustomerInputObjectSchema } from './SaleUncheckedCreateNestedManyWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutCityInput> = z
  .object({
    CUSTOMERID: z.number(),
    PHONE: z.string().optional().nullable(),
    FIRSTNAME: z.string().optional().nullable(),
    LASTNAME: z.string().optional().nullable(),
    ADDRESS: z.string().optional().nullable(),
    ZIPCODE: z.string().optional().nullable(),
    Sale: z
      .lazy(() => SaleUncheckedCreateNestedManyWithoutCustomerInputObjectSchema)
      .optional(),
  })
  .strict();

export const CustomerUncheckedCreateWithoutCityInputObjectSchema = Schema;
