import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { SaleRelationFilterObjectSchema } from './SaleRelationFilter.schema';
import { saleWhereInputObjectSchema } from './saleWhereInput.schema';
import { MerchandiseRelationFilterObjectSchema } from './MerchandiseRelationFilter.schema';
import { merchandiseWhereInputObjectSchema } from './merchandiseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => saleitemWhereInputObjectSchema),
        z.lazy(() => saleitemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => saleitemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => saleitemWhereInputObjectSchema),
        z.lazy(() => saleitemWhereInputObjectSchema).array(),
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
    sale: z
      .union([
        z.lazy(() => SaleRelationFilterObjectSchema),
        z.lazy(() => saleWhereInputObjectSchema),
      ])
      .optional(),
    merchandise: z
      .union([
        z.lazy(() => MerchandiseRelationFilterObjectSchema),
        z.lazy(() => merchandiseWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const saleitemWhereInputObjectSchema = Schema;
