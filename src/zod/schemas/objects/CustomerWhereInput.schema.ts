import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { CityRelationFilterObjectSchema } from './CityRelationFilter.schema';
import { CityWhereInputObjectSchema } from './CityWhereInput.schema';
import { SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CustomerWhereInputObjectSchema),
        z.lazy(() => CustomerWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CustomerWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CustomerWhereInputObjectSchema),
        z.lazy(() => CustomerWhereInputObjectSchema).array(),
      ])
      .optional(),
    CUSTOMERID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    PHONE: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    FIRSTNAME: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    LASTNAME: z
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
    City: z
      .union([
        z.lazy(() => CityRelationFilterObjectSchema),
        z.lazy(() => CityWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Sale: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const CustomerWhereInputObjectSchema = Schema;
