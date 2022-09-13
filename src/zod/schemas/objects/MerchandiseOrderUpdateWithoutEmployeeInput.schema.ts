import { z } from 'zod';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { SupplierUpdateOneWithoutMerchandiseOrderNestedInputObjectSchema } from './SupplierUpdateOneWithoutMerchandiseOrderNestedInput.schema';
import { OrderItemUpdateManyWithoutMerchandiseOrderNestedInputObjectSchema } from './OrderItemUpdateManyWithoutMerchandiseOrderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUpdateWithoutEmployeeInput> = z
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

export const MerchandiseOrderUpdateWithoutEmployeeInputObjectSchema = Schema;
