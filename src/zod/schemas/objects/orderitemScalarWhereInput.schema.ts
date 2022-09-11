import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => orderitemScalarWhereInputObjectSchema),
        z.lazy(() => orderitemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => orderitemScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => orderitemScalarWhereInputObjectSchema),
        z.lazy(() => orderitemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    PONUMBER: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    ITEMID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    QUANTITY: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    COST: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const orderitemScalarWhereInputObjectSchema = Schema;
