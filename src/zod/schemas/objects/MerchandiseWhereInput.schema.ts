import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { CategoryRelationFilterObjectSchema } from './CategoryRelationFilter.schema';
import { CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema';
import { OrderItemListRelationFilterObjectSchema } from './OrderItemListRelationFilter.schema';
import { SaleItemListRelationFilterObjectSchema } from './SaleItemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MerchandiseWhereInputObjectSchema),
        z.lazy(() => MerchandiseWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MerchandiseWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MerchandiseWhereInputObjectSchema),
        z.lazy(() => MerchandiseWhereInputObjectSchema).array(),
      ])
      .optional(),
    ITEMID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    DESCRIPTION: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    QUANTITYONHAND: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
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
    Category: z
      .union([
        z.lazy(() => CategoryRelationFilterObjectSchema),
        z.lazy(() => CategoryWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    OrderItem: z.lazy(() => OrderItemListRelationFilterObjectSchema).optional(),
    SaleItem: z.lazy(() => SaleItemListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const MerchandiseWhereInputObjectSchema = Schema;
