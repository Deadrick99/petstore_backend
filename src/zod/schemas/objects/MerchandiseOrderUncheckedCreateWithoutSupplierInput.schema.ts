import { z } from 'zod';
import { OrderItemUncheckedCreateNestedManyWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUncheckedCreateWithoutSupplierInput> =
  z
    .object({
      PONUMBER: z.number(),
      ORDERDATE: z.date().optional().nullable(),
      RECEIVEDATE: z.date().optional().nullable(),
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

export const MerchandiseOrderUncheckedCreateWithoutSupplierInputObjectSchema =
  Schema;
