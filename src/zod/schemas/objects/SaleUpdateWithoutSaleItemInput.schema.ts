import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { EmployeeUpdateOneWithoutSaleNestedInputObjectSchema } from './EmployeeUpdateOneWithoutSaleNestedInput.schema';
import { CustomerUpdateOneWithoutSaleNestedInputObjectSchema } from './CustomerUpdateOneWithoutSaleNestedInput.schema';
import { SaleAnimalUpdateManyWithoutSaleNestedInputObjectSchema } from './SaleAnimalUpdateManyWithoutSaleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithoutSaleItemInput> = z
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
    Employee: z
      .lazy(() => EmployeeUpdateOneWithoutSaleNestedInputObjectSchema)
      .optional(),
    Customer: z
      .lazy(() => CustomerUpdateOneWithoutSaleNestedInputObjectSchema)
      .optional(),
    SaleAnimal: z
      .lazy(() => SaleAnimalUpdateManyWithoutSaleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleUpdateWithoutSaleItemInputObjectSchema = Schema;
