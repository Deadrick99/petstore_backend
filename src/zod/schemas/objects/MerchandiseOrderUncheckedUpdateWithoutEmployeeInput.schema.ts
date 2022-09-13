import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { OrderItemUncheckedUpdateManyWithoutMerchandiseOrderNestedInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutMerchandiseOrderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUncheckedUpdateWithoutEmployeeInput> =
  z
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
      SUPPLIERID: z
        .union([
          z.number(),
          z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
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
      OrderItem: z
        .lazy(
          () =>
            OrderItemUncheckedUpdateManyWithoutMerchandiseOrderNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MerchandiseOrderUncheckedUpdateWithoutEmployeeInputObjectSchema =
  Schema;
