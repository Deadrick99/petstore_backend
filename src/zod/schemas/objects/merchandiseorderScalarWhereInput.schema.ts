import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => merchandiseorderScalarWhereInputObjectSchema),
        z.lazy(() => merchandiseorderScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => merchandiseorderScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => merchandiseorderScalarWhereInputObjectSchema),
        z.lazy(() => merchandiseorderScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    PONUMBER: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    ORDERDATE: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    RECEIVEDATE: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    SUPPLIERID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    EMPLOYEEID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    SHIPPINGCOST: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const merchandiseorderScalarWhereInputObjectSchema = Schema;
