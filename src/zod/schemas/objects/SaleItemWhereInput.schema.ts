import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { IntNullableFilterObjectSchema } from './IntNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { SaleRelationFilterObjectSchema } from './SaleRelationFilter.schema';
import { SaleWhereInputObjectSchema } from './SaleWhereInput.schema';
import { MerchandiseRelationFilterObjectSchema } from './MerchandiseRelationFilter.schema';
import { MerchandiseWhereInputObjectSchema } from './MerchandiseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SaleItemWhereInputObjectSchema),
        z.lazy(() => SaleItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SaleItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SaleItemWhereInputObjectSchema),
        z.lazy(() => SaleItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    SALEID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    ITEMID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    QUANTITY: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    SALEPRICE: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    Sale: z
      .union([
        z.lazy(() => SaleRelationFilterObjectSchema),
        z.lazy(() => SaleWhereInputObjectSchema),
      ])
      .optional(),
    Merchandise: z
      .union([
        z.lazy(() => MerchandiseRelationFilterObjectSchema),
        z.lazy(() => MerchandiseWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const SaleItemWhereInputObjectSchema = Schema;
