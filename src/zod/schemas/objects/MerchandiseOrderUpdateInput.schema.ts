import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { EmployeeUpdateOneWithoutMerchandiseOrderNestedInputObjectSchema } from './EmployeeUpdateOneWithoutMerchandiseOrderNestedInput.schema';
import { SupplierUpdateOneWithoutMerchandiseOrderNestedInputObjectSchema } from './SupplierUpdateOneWithoutMerchandiseOrderNestedInput.schema';
import { OrderItemUpdateManyWithoutMerchandiseOrderNestedInputObjectSchema } from './OrderItemUpdateManyWithoutMerchandiseOrderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUpdateInput> = z
  .object({
    PONUMBER: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
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
    OrderItem: z
      .lazy(
        () => OrderItemUpdateManyWithoutMerchandiseOrderNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MerchandiseOrderUpdateInputObjectSchema = Schema;
