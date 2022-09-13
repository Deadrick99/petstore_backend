import { z } from 'zod';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { EmployeeUpdateOneWithoutAnimalOrderNestedInputObjectSchema } from './EmployeeUpdateOneWithoutAnimalOrderNestedInput.schema';
import { SupplierUpdateOneWithoutAnimalOrderNestedInputObjectSchema } from './SupplierUpdateOneWithoutAnimalOrderNestedInput.schema';
import { AnimalOrderItemUpdateManyWithoutAnimalOrderNestedInputObjectSchema } from './AnimalOrderItemUpdateManyWithoutAnimalOrderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUpdateInput> = z
  .object({
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
    Supplier: z
      .lazy(() => SupplierUpdateOneWithoutAnimalOrderNestedInputObjectSchema)
      .optional(),
    AnimalOrderItem: z
      .lazy(
        () =>
          AnimalOrderItemUpdateManyWithoutAnimalOrderNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const AnimalOrderUpdateInputObjectSchema = Schema;
