import { z } from 'zod';
import { customerUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './customerUncheckedCreateNestedManyWithoutCityInput.schema';
import { supplierUncheckedCreateNestedManyWithoutCityInputObjectSchema } from './supplierUncheckedCreateNestedManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityUncheckedCreateWithoutEmployeeInput> = z
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
    customer: z
      .lazy(() => customerUncheckedCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
    supplier: z
      .lazy(() => supplierUncheckedCreateNestedManyWithoutCityInputObjectSchema)
      .optional(),
  })
  .strict();

export const cityUncheckedCreateWithoutEmployeeInputObjectSchema = Schema;
