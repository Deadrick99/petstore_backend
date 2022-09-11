import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { customerUpdateOneWithoutSaleNestedInputObjectSchema } from './customerUpdateOneWithoutSaleNestedInput.schema';
import { saleanimalUpdateManyWithoutSaleNestedInputObjectSchema } from './saleanimalUpdateManyWithoutSaleNestedInput.schema';
import { saleitemUpdateManyWithoutSaleNestedInputObjectSchema } from './saleitemUpdateManyWithoutSaleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUpdateWithoutEmployeeInput> = z
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
    SALESTAX: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    customer: z
      .lazy(() => customerUpdateOneWithoutSaleNestedInputObjectSchema)
      .optional(),
    saleanimal: z
      .lazy(() => saleanimalUpdateManyWithoutSaleNestedInputObjectSchema)
      .optional(),
    saleitem: z
      .lazy(() => saleitemUpdateManyWithoutSaleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleUpdateWithoutEmployeeInputObjectSchema = Schema;
