import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => AnimalOrderScalarWhereInputObjectSchema),
        z.lazy(() => AnimalOrderScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => AnimalOrderScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => AnimalOrderScalarWhereInputObjectSchema),
        z.lazy(() => AnimalOrderScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    ORDERID: z
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
    SHIPPINGCOST: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    EMPLOYEEID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const AnimalOrderScalarWhereInputObjectSchema = Schema;
