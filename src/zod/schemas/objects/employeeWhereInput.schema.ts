import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { CityRelationFilterObjectSchema } from './CityRelationFilter.schema';
import { cityWhereInputObjectSchema } from './cityWhereInput.schema';
import { AnimalorderListRelationFilterObjectSchema } from './AnimalorderListRelationFilter.schema';
import { MerchandiseorderListRelationFilterObjectSchema } from './MerchandiseorderListRelationFilter.schema';
import { SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => employeeWhereInputObjectSchema),
        z.lazy(() => employeeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => employeeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => employeeWhereInputObjectSchema),
        z.lazy(() => employeeWhereInputObjectSchema).array(),
      ])
      .optional(),
    EMPLOYEEID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    LASTNAME: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    FIRSTNAME: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    PHONE: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    ADDRESS: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    ZIPCODE: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    CITYID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    TAXPAYERID: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    DATEHIRED: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    DATERELEASED: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    MANAGERID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    EMPLOYEELEVEL: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    TITLE: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    city: z
      .union([
        z.lazy(() => CityRelationFilterObjectSchema),
        z.lazy(() => cityWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    animalorder: z
      .lazy(() => AnimalorderListRelationFilterObjectSchema)
      .optional(),
    merchandiseorder: z
      .lazy(() => MerchandiseorderListRelationFilterObjectSchema)
      .optional(),
    sale: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const employeeWhereInputObjectSchema = Schema;
