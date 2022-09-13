import { z } from 'zod';
import { CityCreateNestedOneWithoutCustomerInputObjectSchema } from './CityCreateNestedOneWithoutCustomerInput.schema';
import { SaleCreateNestedManyWithoutCustomerInputObjectSchema } from './SaleCreateNestedManyWithoutCustomerInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerCreateInput> = z
  .object({
    CUSTOMERID: z.number(),
    PHONE: z.string().optional().nullable(),
    FIRSTNAME: z.string().optional().nullable(),
    LASTNAME: z.string().optional().nullable(),
    ADDRESS: z.string().optional().nullable(),
    ZIPCODE: z.string().optional().nullable(),
    City: z
      .lazy(() => CityCreateNestedOneWithoutCustomerInputObjectSchema)
      .optional(),
    Sale: z
      .lazy(() => SaleCreateNestedManyWithoutCustomerInputObjectSchema)
      .optional(),
  })
  .strict();

export const CustomerCreateInputObjectSchema = Schema;
