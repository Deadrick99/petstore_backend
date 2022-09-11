import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { CityRelationFilterObjectSchema } from './CityRelationFilter.schema';
import { cityWhereInputObjectSchema } from './cityWhereInput.schema';
import { SaleListRelationFilterObjectSchema } from './SaleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => customerWhereInputObjectSchema),
        z.lazy(() => customerWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => customerWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => customerWhereInputObjectSchema),
        z.lazy(() => customerWhereInputObjectSchema).array(),
      ])
      .optional(),
    CUSTOMERID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
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
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    city: z
      .union([
        z.lazy(() => CityRelationFilterObjectSchema),
        z.lazy(() => cityWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    sale: z.lazy(() => SaleListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const customerWhereInputObjectSchema = Schema;
