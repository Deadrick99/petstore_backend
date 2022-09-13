import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { SaleAnimalUncheckedUpdateManyWithoutSaleNestedInputObjectSchema } from './SaleAnimalUncheckedUpdateManyWithoutSaleNestedInput.schema';
import { SaleItemUncheckedUpdateManyWithoutSaleNestedInputObjectSchema } from './SaleItemUncheckedUpdateManyWithoutSaleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedUpdateWithoutCustomerInput> = z
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
    SALESTAX: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    SaleAnimal: z
      .lazy(
        () => SaleAnimalUncheckedUpdateManyWithoutSaleNestedInputObjectSchema,
      )
      .optional(),
    SaleItem: z
      .lazy(() => SaleItemUncheckedUpdateManyWithoutSaleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleUncheckedUpdateWithoutCustomerInputObjectSchema = Schema;
