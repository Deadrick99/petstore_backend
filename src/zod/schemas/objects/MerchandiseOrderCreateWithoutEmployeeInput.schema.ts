import { z } from 'zod';
import { SupplierCreateNestedOneWithoutMerchandiseOrderInputObjectSchema } from './SupplierCreateNestedOneWithoutMerchandiseOrderInput.schema';
import { OrderItemCreateNestedManyWithoutMerchandiseOrderInputObjectSchema } from './OrderItemCreateNestedManyWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderCreateWithoutEmployeeInput> = z
  .object({
    PONUMBER: z.number(),
    ORDERDATE: z.date().optional().nullable(),
    RECEIVEDATE: z.date().optional().nullable(),
    SHIPPINGCOST: z.number().optional().nullable(),
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

export const MerchandiseOrderCreateWithoutEmployeeInputObjectSchema = Schema;
