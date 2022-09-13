import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { EmployeeUpdateOneWithoutAnimalOrderNestedInputObjectSchema } from './EmployeeUpdateOneWithoutAnimalOrderNestedInput.schema';
import { AnimalOrderItemUpdateManyWithoutAnimalOrderNestedInputObjectSchema } from './AnimalOrderItemUpdateManyWithoutAnimalOrderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUpdateWithoutSupplierInput> = z
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
    Employee: z
      .lazy(() => EmployeeUpdateOneWithoutAnimalOrderNestedInputObjectSchema)
      .optional(),
    AnimalOrderItem: z
      .lazy(
        () =>
          AnimalOrderItemUpdateManyWithoutAnimalOrderNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnimalOrderUpdateWithoutSupplierInputObjectSchema = Schema;
