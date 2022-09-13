import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SupplierScalarWhereInputObjectSchema),
        z.lazy(() => SupplierScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SupplierScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SupplierScalarWhereInputObjectSchema),
        z.lazy(() => SupplierScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    SUPPLIERID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    NAME: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    CONTACTNAME: z
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
  })
  .strict();

export const SupplierScalarWhereInputObjectSchema = Schema;
