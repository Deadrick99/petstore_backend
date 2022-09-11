import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { supplierUpdateOneWithoutMerchandiseorderNestedInputObjectSchema } from './supplierUpdateOneWithoutMerchandiseorderNestedInput.schema';
import { orderitemUpdateManyWithoutMerchandiseorderNestedInputObjectSchema } from './orderitemUpdateManyWithoutMerchandiseorderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUpdateWithoutEmployeeInput> = z
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
    supplier: z
      .lazy(
        () => supplierUpdateOneWithoutMerchandiseorderNestedInputObjectSchema,
      )
      .optional(),
    orderitem: z
      .lazy(
        () => orderitemUpdateManyWithoutMerchandiseorderNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const merchandiseorderUpdateWithoutEmployeeInputObjectSchema = Schema;
