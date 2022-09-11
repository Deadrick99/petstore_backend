import { z } from 'zod';
import { employeeCreateNestedManyWithoutCityInputObjectSchema } from './employeeCreateNestedManyWithoutCityInput.schema';
import { supplierCreateNestedManyWithoutCityInputObjectSchema } from './supplierCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityCreateWithoutCustomerInput> = z
  .object({
    CITYID: z.number(),
    ZIPCODE: z.string().optional().nullable(),
    CITY: z.string().optional().nullable(),
    STATE: z.string().optional().nullable(),
    AREACODE: z.string().optional().nullable(),
    POPULATION1990: z.number().optional().nullable(),
    POPULATION1980: z.number().optional().nullable(),
    COUNTRY: z.string().optional().nullable(),
    LATITUDE: z.number().optional().nullable(),
    LONGITUDE: z.number().optional().nullable(),
    employee: z
      .lazy(() => employeeCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
    supplier: z
      .lazy(() => supplierCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
  })
  .strict();

export const cityCreateWithoutCustomerInputObjectSchema = Schema;
