import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { MerchandiseRelationFilterObjectSchema } from './MerchandiseRelationFilter.schema';
import { MerchandiseWhereInputObjectSchema } from './MerchandiseWhereInput.schema';
import { MerchandiseOrderRelationFilterObjectSchema } from './MerchandiseOrderRelationFilter.schema';
import { MerchandiseOrderWhereInputObjectSchema } from './MerchandiseOrderWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => OrderItemWhereInputObjectSchema),
        z.lazy(() => OrderItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => OrderItemWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => OrderItemWhereInputObjectSchema),
        z.lazy(() => OrderItemWhereInputObjectSchema).array(),
      ])
      .optional(),
    PONUMBER: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    ITEMID: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    QUANTITY: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    COST: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    Merchandise: z
      .union([
        z.lazy(() => MerchandiseRelationFilterObjectSchema),
        z.lazy(() => MerchandiseWhereInputObjectSchema),
      ])
      .optional(),
    MerchandiseOrder: z
      .union([
        z.lazy(() => MerchandiseOrderRelationFilterObjectSchema),
        z.lazy(() => MerchandiseOrderWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const OrderItemWhereInputObjectSchema = Schema;
