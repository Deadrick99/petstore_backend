import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => saleitemScalarWhereInputObjectSchema),
        z.lazy(() => saleitemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => saleitemScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => saleitemScalarWhereInputObjectSchema),
        z.lazy(() => saleitemScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    SALEID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    ITEMID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    QUANTITY: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    SALEPRICE: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict();

export const saleitemScalarWhereInputObjectSchema = Schema;
