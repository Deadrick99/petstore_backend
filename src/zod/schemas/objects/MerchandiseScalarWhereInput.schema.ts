import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MerchandiseScalarWhereInputObjectSchema),
        z.lazy(() => MerchandiseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MerchandiseScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MerchandiseScalarWhereInputObjectSchema),
        z.lazy(() => MerchandiseScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    ITEMID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    DESCRIPTION: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    QUANTITYONHAND: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    LISTPRICE: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    CATEGORY: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict();

export const MerchandiseScalarWhereInputObjectSchema = Schema;
