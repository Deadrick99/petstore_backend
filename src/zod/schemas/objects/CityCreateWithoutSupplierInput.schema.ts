import { z } from 'zod';
import { CustomerCreateNestedManyWithoutCityInputObjectSchema } from './CustomerCreateNestedManyWithoutCityInput.schema';
import { EmployeeCreateNestedManyWithoutCityInputObjectSchema } from './EmployeeCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityCreateWithoutSupplierInput> = z
  .object({
    ZIPCODE: z.string().optional().nullable(),
    CITY: z.string().optional().nullable(),
    STATE: z.string().optional().nullable(),
    AREACODE: z.string().optional().nullable(),
    POPULATION1990: z.number().optional().nullable(),
    POPULATION1980: z.number().optional().nullable(),
    COUNTRY: z.string().optional().nullable(),
    LATITUDE: z.number().optional().nullable(),
    LONGITUDE: z.number().optional().nullable(),
    Customer: z
      .lazy(() => CustomerCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
    Employee: z
      .lazy(() => EmployeeCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
  })
  .strict();

export const CityCreateWithoutSupplierInputObjectSchema = Schema;
