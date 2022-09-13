import { z } from 'zod';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { EmployeeUpdateOneWithoutMerchandiseOrderNestedInputObjectSchema } from './EmployeeUpdateOneWithoutMerchandiseOrderNestedInput.schema';
import { SupplierUpdateOneWithoutMerchandiseOrderNestedInputObjectSchema } from './SupplierUpdateOneWithoutMerchandiseOrderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUpdateWithoutOrderItemInput> = z
  .object({
    ORDERDATE: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    RECEIVEDATE: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    SHIPPINGCOST: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Employee: z
      .lazy(
        () => EmployeeUpdateOneWithoutMerchandiseOrderNestedInputObjectSchema,
      )
      .optional(),
    Supplier: z
      .lazy(
        () => SupplierUpdateOneWithoutMerchandiseOrderNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MerchandiseOrderUpdateWithoutOrderItemInputObjectSchema = Schema;
