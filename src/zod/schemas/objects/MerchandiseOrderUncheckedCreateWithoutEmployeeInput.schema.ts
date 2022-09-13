import { z } from 'zod';
import { OrderItemUncheckedCreateNestedManyWithoutMerchandiseOrderInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUncheckedCreateWithoutEmployeeInput> =
  z
    .object({
      PONUMBER: z.number().optional(),
      ORDERDATE: z.date().optional().nullable(),
      RECEIVEDATE: z.date().optional().nullable(),
      SUPPLIERID: z.number().optional().nullable(),
      SHIPPINGCOST: z.number().optional().nullable(),
      OrderItem: z
        .lazy(
          () =>
            OrderItemUncheckedCreateNestedManyWithoutMerchandiseOrderInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MerchandiseOrderUncheckedCreateWithoutEmployeeInputObjectSchema =
  Schema;
