import { z } from 'zod';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { SupplierUpdateOneWithoutAnimalOrderNestedInputObjectSchema } from './SupplierUpdateOneWithoutAnimalOrderNestedInput.schema';
import { AnimalOrderItemUpdateManyWithoutAnimalOrderNestedInputObjectSchema } from './AnimalOrderItemUpdateManyWithoutAnimalOrderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUpdateWithoutEmployeeInput> = z
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

export const AnimalOrderUpdateWithoutEmployeeInputObjectSchema = Schema;
