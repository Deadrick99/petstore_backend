import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CustomerScalarWhereInputObjectSchema),
        z.lazy(() => CustomerScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CustomerScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CustomerScalarWhereInputObjectSchema),
        z.lazy(() => CustomerScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const CustomerScalarWhereInputObjectSchema = Schema;
