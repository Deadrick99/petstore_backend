import { z } from 'zod';
import { supplierCreateNestedOneWithoutMerchandiseorderInputObjectSchema } from './supplierCreateNestedOneWithoutMerchandiseorderInput.schema';
import { orderitemCreateNestedManyWithoutMerchandiseorderInputObjectSchema } from './orderitemCreateNestedManyWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderCreateWithoutEmployeeInput> = z
  .object({
    PONUMBER: z.number(),
    ORDERDATE: z.date().optional().nullable(),
    RECEIVEDATE: z.date().optional().nullable(),
    SHIPPINGCOST: z.number().optional().nullable(),
    supplier: z
      .lazy(
        () => supplierCreateNestedOneWithoutMerchandiseorderInputObjectSchema,
      )
      .optional(),
    orderitem: z
      .lazy(
        () => orderitemCreateNestedManyWithoutMerchandiseorderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const merchandiseorderCreateWithoutEmployeeInputObjectSchema = Schema;
