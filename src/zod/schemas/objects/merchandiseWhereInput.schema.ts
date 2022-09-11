import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { CategoryRelationFilterObjectSchema } from './CategoryRelationFilter.schema';
import { categoryWhereInputObjectSchema } from './categoryWhereInput.schema';
import { OrderitemListRelationFilterObjectSchema } from './OrderitemListRelationFilter.schema';
import { SaleitemListRelationFilterObjectSchema } from './SaleitemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => merchandiseWhereInputObjectSchema),
        z.lazy(() => merchandiseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => merchandiseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => merchandiseWhereInputObjectSchema),
        z.lazy(() => merchandiseWhereInputObjectSchema).array(),
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
    category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => categoryWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    orderitem: z.lazy(() => OrderitemListRelationFilterObjectSchema).optional(),
    saleitem: z.lazy(() => SaleitemListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const merchandiseWhereInputObjectSchema = Schema;
