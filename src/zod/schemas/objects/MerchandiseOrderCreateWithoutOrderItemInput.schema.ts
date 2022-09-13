import { z } from 'zod';
import { EmployeeCreateNestedOneWithoutMerchandiseOrderInputObjectSchema } from './EmployeeCreateNestedOneWithoutMerchandiseOrderInput.schema';
import { SupplierCreateNestedOneWithoutMerchandiseOrderInputObjectSchema } from './SupplierCreateNestedOneWithoutMerchandiseOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderCreateWithoutOrderItemInput> = z
  .object({
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
  })
  .strict();

export const MerchandiseOrderCreateWithoutOrderItemInputObjectSchema = Schema;
