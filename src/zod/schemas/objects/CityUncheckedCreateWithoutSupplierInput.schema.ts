import { z } from 'zod';
import { CustomerUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './CustomerUncheckedCreateNestedManyWithoutCityInput.schema';
import { EmployeeUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './EmployeeUncheckedCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityUncheckedCreateWithoutSupplierInput> = z
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
    Customer: z
      .lazy(() => CustomerUncheckedCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
    Employee: z
      .lazy(() => EmployeeUncheckedCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
  })
  .strict();

export const CityUncheckedCreateWithoutSupplierInputObjectSchema = Schema;
