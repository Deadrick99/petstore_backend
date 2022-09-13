import { z } from 'zod';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { CustomerUpdateOneWithoutSaleNestedInputObjectSchema } from './CustomerUpdateOneWithoutSaleNestedInput.schema';
import { EmployeeUpdateOneWithoutSaleNestedInputObjectSchema } from './EmployeeUpdateOneWithoutSaleNestedInput.schema';
import { SaleAnimalUpdateManyWithoutSaleNestedInputObjectSchema } from './SaleAnimalUpdateManyWithoutSaleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateWithoutSaleItemInput> = z
  .object({
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
    Employee: z
      .lazy(() => EmployeeUpdateOneWithoutSaleNestedInputObjectSchema)
      .optional(),
    SaleAnimal: z
      .lazy(() => SaleAnimalUpdateManyWithoutSaleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleUpdateWithoutSaleItemInputObjectSchema = Schema;
