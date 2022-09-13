import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { CustomerUpdateOneWithoutSaleNestedInputObjectSchema } from './CustomerUpdateOneWithoutSaleNestedInput.schema';
import { SaleAnimalUpdateManyWithoutSaleNestedInputObjectSchema } from './SaleAnimalUpdateManyWithoutSaleNestedInput.schema';
import { SaleItemUpdateManyWithoutSaleNestedInputObjectSchema } from './SaleItemUpdateManyWithoutSaleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithoutEmployeeInput> = z
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
    Customer: z
      .lazy(() => CustomerUpdateOneWithoutSaleNestedInputObjectSchema)
      .optional(),
    SaleAnimal: z
      .lazy(() => SaleAnimalUpdateManyWithoutSaleNestedInputObjectSchema)
      .optional(),
    SaleItem: z
      .lazy(() => SaleItemUpdateManyWithoutSaleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleUpdateWithoutEmployeeInputObjectSchema = Schema;
