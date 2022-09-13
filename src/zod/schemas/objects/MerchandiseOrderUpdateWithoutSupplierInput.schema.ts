import { z } from 'zod';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { EmployeeUpdateOneWithoutMerchandiseOrderNestedInputObjectSchema } from './EmployeeUpdateOneWithoutMerchandiseOrderNestedInput.schema';
import { OrderItemUpdateManyWithoutMerchandiseOrderNestedInputObjectSchema } from './OrderItemUpdateManyWithoutMerchandiseOrderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUpdateWithoutSupplierInput> = z
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
    OrderItem: z
      .lazy(
        () => OrderItemUpdateManyWithoutMerchandiseOrderNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MerchandiseOrderUpdateWithoutSupplierInputObjectSchema = Schema;
