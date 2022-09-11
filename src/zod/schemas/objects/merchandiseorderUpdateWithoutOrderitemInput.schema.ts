import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { supplierUpdateOneWithoutMerchandiseorderNestedInputObjectSchema } from './supplierUpdateOneWithoutMerchandiseorderNestedInput.schema';
import { employeeUpdateOneWithoutMerchandiseorderNestedInputObjectSchema } from './employeeUpdateOneWithoutMerchandiseorderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUpdateWithoutOrderitemInput> = z
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
    employee: z
      .lazy(
        () => employeeUpdateOneWithoutMerchandiseorderNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const merchandiseorderUpdateWithoutOrderitemInputObjectSchema = Schema;
