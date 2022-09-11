import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { saleanimalUncheckedUpdateManyWithoutSaleNestedInputObjectSchema } from './saleanimalUncheckedUpdateManyWithoutSaleNestedInput.schema';
import { saleitemUncheckedUpdateManyWithoutSaleNestedInputObjectSchema } from './saleitemUncheckedUpdateManyWithoutSaleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUncheckedUpdateInput> = z
  .object({
    SALEID: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    SALEDATE: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    EMPLOYEEID: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    CUSTOMERID: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    SALESTAX: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    saleanimal: z
      .lazy(
        () => saleanimalUncheckedUpdateManyWithoutSaleNestedInputObjectSchema,
      )
      .optional(),
    saleitem: z
      .lazy(() => saleitemUncheckedUpdateManyWithoutSaleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleUncheckedUpdateInputObjectSchema = Schema;
