import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { CityRelationFilterObjectSchema } from './CityRelationFilter.schema';
import { CityWhereInputObjectSchema } from './CityWhereInput.schema';
import { AnimalOrderListRelationFilterObjectSchema } from './AnimalOrderListRelationFilter.schema';
import { MerchandiseOrderListRelationFilterObjectSchema } from './MerchandiseOrderListRelationFilter.schema';
import { SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EmployeeWhereInputObjectSchema),
        z.lazy(() => EmployeeWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EmployeeWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EmployeeWhereInputObjectSchema),
        z.lazy(() => EmployeeWhereInputObjectSchema).array(),
      ])
      .optional(),
    EMPLOYEEID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
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
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
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
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    EMPLOYEELEVEL: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    TITLE: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    City: z
      .union([
        z.lazy(() => CityRelationFilterObjectSchema),
        z.lazy(() => CityWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    AnimalOrder: z
      .lazy(() => AnimalOrderListRelationFilterObjectSchema)
      .optional(),
    MerchandiseOrder: z
      .lazy(() => MerchandiseOrderListRelationFilterObjectSchema)
      .optional(),
    Sale: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const EmployeeWhereInputObjectSchema = Schema;
