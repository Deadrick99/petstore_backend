import { z } from 'zod';
import { employeeCreateNestedOneWithoutMerchandiseorderInputObjectSchema } from './employeeCreateNestedOneWithoutMerchandiseorderInput.schema';
import { orderitemCreateNestedManyWithoutMerchandiseorderInputObjectSchema } from './orderitemCreateNestedManyWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderCreateWithoutSupplierInput> = z
  .object({
    PONUMBER: z.number(),
    ORDERDATE: z.date().optional().nullable(),
    RECEIVEDATE: z.date().optional().nullable(),
    SHIPPINGCOST: z.number().optional().nullable(),
    employee: z
      .lazy(
        () => employeeCreateNestedOneWithoutMerchandiseorderInputObjectSchema,
      )
      .optional(),
    orderitem: z
      .lazy(
        () => orderitemCreateNestedManyWithoutMerchandiseorderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const merchandiseorderCreateWithoutSupplierInputObjectSchema = Schema;
