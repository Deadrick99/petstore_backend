import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => saleScalarWhereInputObjectSchema),
        z.lazy(() => saleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => saleScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => saleScalarWhereInputObjectSchema),
        z.lazy(() => saleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    SALEID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    SALEDATE: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    EMPLOYEEID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    CUSTOMERID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    SALESTAX: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const saleScalarWhereInputObjectSchema = Schema;
