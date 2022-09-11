import { z } from 'zod';
import { orderitemUncheckedCreateNestedManyWithoutMerchandiseorderInputObjectSchema } from './orderitemUncheckedCreateNestedManyWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUncheckedCreateWithoutSupplierInput> =
  z
    .object({
      PONUMBER: z.number(),
      ORDERDATE: z.date().optional().nullable(),
      RECEIVEDATE: z.date().optional().nullable(),
      EMPLOYEEID: z.number().optional().nullable(),
      SHIPPINGCOST: z.number().optional().nullable(),
      orderitem: z
        .lazy(
          () =>
            orderitemUncheckedCreateNestedManyWithoutMerchandiseorderInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const merchandiseorderUncheckedCreateWithoutSupplierInputObjectSchema =
  Schema;
