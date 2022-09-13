import { z } from 'zod';
import { DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { DateTimeNullableWithAggregatesFilterObjectSchema } from './DateTimeNullableWithAggregatesFilter.schema';
import { DecimalNullableWithAggregatesFilterObjectSchema } from './DecimalNullableWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => MerchandiseOrderScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => MerchandiseOrderScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(() => MerchandiseOrderScalarWhereWithAggregatesInputObjectSchema)
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => MerchandiseOrderScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () => MerchandiseOrderScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      PONUMBER: z
        .union([
          z.lazy(() => DecimalWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional(),
      ORDERDATE: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
          z.date(),
        ])
        .optional()
        .nullable(),
      RECEIVEDATE: z
        .union([
          z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema),
          z.date(),
        ])
        .optional()
        .nullable(),
      SUPPLIERID: z
        .union([
          z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      EMPLOYEEID: z
        .union([
          z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
      SHIPPINGCOST: z
        .union([
          z.lazy(() => DecimalNullableWithAggregatesFilterObjectSchema),
          z.number(),
        ])
        .optional()
        .nullable(),
    })
    .strict();

export const MerchandiseOrderScalarWhereWithAggregatesInputObjectSchema =
  Schema;
