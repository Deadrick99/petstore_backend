import { z } from 'zod';
import { EmployeeCreateNestedOneWithoutMerchandiseOrderInputObjectSchema } from './EmployeeCreateNestedOneWithoutMerchandiseOrderInput.schema';
import { SupplierCreateNestedOneWithoutMerchandiseOrderInputObjectSchema } from './SupplierCreateNestedOneWithoutMerchandiseOrderInput.schema';
import { OrderItemCreateNestedManyWithoutMerchandiseOrderInputObjectSchema } from './OrderItemCreateNestedManyWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderCreateInput> = z
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
    Supplier: z
      .lazy(
        () => SupplierCreateNestedOneWithoutMerchandiseOrderInputObjectSchema,
      )
      .optional(),
    OrderItem: z
      .lazy(
        () => OrderItemCreateNestedManyWithoutMerchandiseOrderInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MerchandiseOrderCreateInputObjectSchema = Schema;
