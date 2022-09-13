import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { CustomerListRelationFilterObjectSchema } from './CustomerListRelationFilter.schema';
import { EmployeeListRelationFilterObjectSchema } from './EmployeeListRelationFilter.schema';
import { SupplierListRelationFilterObjectSchema } from './SupplierListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CityWhereInputObjectSchema),
        z.lazy(() => CityWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CityWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CityWhereInputObjectSchema),
        z.lazy(() => CityWhereInputObjectSchema).array(),
      ])
      .optional(),
    CITYID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    ZIPCODE: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    CITY: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    STATE: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    AREACODE: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    POPULATION1990: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    POPULATION1980: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    COUNTRY: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    LATITUDE: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    LONGITUDE: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    Customer: z.lazy(() => CustomerListRelationFilterObjectSchema).optional(),
    Employee: z.lazy(() => EmployeeListRelationFilterObjectSchema).optional(),
    Supplier: z.lazy(() => SupplierListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const CityWhereInputObjectSchema = Schema;
