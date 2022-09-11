import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { CustomerListRelationFilterObjectSchema } from './CustomerListRelationFilter.schema';
import { EmployeeListRelationFilterObjectSchema } from './EmployeeListRelationFilter.schema';
import { SupplierListRelationFilterObjectSchema } from './SupplierListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.cityWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => cityWhereInputObjectSchema),
        z.lazy(() => cityWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => cityWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => cityWhereInputObjectSchema),
        z.lazy(() => cityWhereInputObjectSchema).array(),
      ])
      .optional(),
    CITYID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
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
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    POPULATION1980: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
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
    customer: z.lazy(() => CustomerListRelationFilterObjectSchema).optional(),
    employee: z.lazy(() => EmployeeListRelationFilterObjectSchema).optional(),
    supplier: z.lazy(() => SupplierListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const cityWhereInputObjectSchema = Schema;
