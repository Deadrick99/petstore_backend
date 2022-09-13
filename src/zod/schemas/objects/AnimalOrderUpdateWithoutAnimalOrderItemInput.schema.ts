import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { SupplierUpdateOneWithoutAnimalOrderNestedInputObjectSchema } from './SupplierUpdateOneWithoutAnimalOrderNestedInput.schema';
import { EmployeeUpdateOneWithoutAnimalOrderNestedInputObjectSchema } from './EmployeeUpdateOneWithoutAnimalOrderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUpdateWithoutAnimalOrderItemInput> = z
  .object({
    ORDERID: z
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
    Supplier: z
      .lazy(() => SupplierUpdateOneWithoutAnimalOrderNestedInputObjectSchema)
      .optional(),
    Employee: z
      .lazy(() => EmployeeUpdateOneWithoutAnimalOrderNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const AnimalOrderUpdateWithoutAnimalOrderItemInputObjectSchema = Schema;
