import { z } from 'zod';
import { supplierCreateNestedOneWithoutMerchandiseorderInputObjectSchema } from './supplierCreateNestedOneWithoutMerchandiseorderInput.schema';
import { employeeCreateNestedOneWithoutMerchandiseorderInputObjectSchema } from './employeeCreateNestedOneWithoutMerchandiseorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderCreateWithoutOrderitemInput> = z
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
    employee: z
      .lazy(
        () => employeeCreateNestedOneWithoutMerchandiseorderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const merchandiseorderCreateWithoutOrderitemInputObjectSchema = Schema;
