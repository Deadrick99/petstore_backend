import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerAccountWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => CustomerAccountWhereInputObjectSchema),
        z.lazy(() => CustomerAccountWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => CustomerAccountWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => CustomerAccountWhereInputObjectSchema),
        z.lazy(() => CustomerAccountWhereInputObjectSchema).array(),
      ])
      .optional(),
    ACCOUNTID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    CUSTOMERID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    BALANCE: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const CustomerAccountWhereInputObjectSchema = Schema;
