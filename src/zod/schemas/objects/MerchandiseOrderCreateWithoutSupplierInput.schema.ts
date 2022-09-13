import { z } from 'zod';
import { EmployeeCreateNestedOneWithoutMerchandiseOrderInputObjectSchema } from './EmployeeCreateNestedOneWithoutMerchandiseOrderInput.schema';
import { OrderItemCreateNestedManyWithoutMerchandiseOrderInputObjectSchema } from './OrderItemCreateNestedManyWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderCreateWithoutSupplierInput> = z
  .object({
    PONUMBER: z.number(),
    ORDERDATE: z.date().optional().nullable(),
    RECEIVEDATE: z.date().optional().nullable(),
    SHIPPINGCOST: z.number().optional().nullable(),
    Employee: z
      .lazy(
        () => EmployeeCreateNestedOneWithoutMerchandiseOrderInputObjectSchema,
      )
      .optional(),
    OrderItem: z
      .lazy(
        () => OrderItemCreateNestedManyWithoutMerchandiseOrderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MerchandiseOrderCreateWithoutSupplierInputObjectSchema = Schema;
