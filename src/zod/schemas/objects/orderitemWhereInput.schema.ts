import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { MerchandiseorderRelationFilterObjectSchema } from './MerchandiseorderRelationFilter.schema';
import { merchandiseorderWhereInputObjectSchema } from './merchandiseorderWhereInput.schema';
import { MerchandiseRelationFilterObjectSchema } from './MerchandiseRelationFilter.schema';
import { merchandiseWhereInputObjectSchema } from './merchandiseWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => orderitemWhereInputObjectSchema),
        z.lazy(() => orderitemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => orderitemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => orderitemWhereInputObjectSchema),
        z.lazy(() => orderitemWhereInputObjectSchema).array(),
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
    merchandiseorder: z
      .union([
        z.lazy(() => MerchandiseorderRelationFilterObjectSchema),
        z.lazy(() => merchandiseorderWhereInputObjectSchema),
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

export const orderitemWhereInputObjectSchema = Schema;
