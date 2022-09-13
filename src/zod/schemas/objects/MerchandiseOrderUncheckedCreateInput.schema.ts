import { z } from 'zod';
import { OrderItemUncheckedCreateNestedManyWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUncheckedCreateInput> = z
  .object({
    PONUMBER: z.number(),
    ORDERDATE: z.date().optional().nullable(),
    RECEIVEDATE: z.date().optional().nullable(),
    SUPPLIERID: z.number().optional().nullable(),
    EMPLOYEEID: z.number().optional().nullable(),
    SHIPPINGCOST: z.number().optional().nullable(),
    OrderItem: z
      .lazy(
        () =>
          OrderItemUncheckedCreateNestedManyWithoutMerchandiseOrderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MerchandiseOrderUncheckedCreateInputObjectSchema = Schema;
