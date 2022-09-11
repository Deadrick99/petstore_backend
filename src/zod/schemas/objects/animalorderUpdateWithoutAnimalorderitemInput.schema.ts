import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { supplierUpdateOneWithoutAnimalorderNestedInputObjectSchema } from './supplierUpdateOneWithoutAnimalorderNestedInput.schema';
import { employeeUpdateOneWithoutAnimalorderNestedInputObjectSchema } from './employeeUpdateOneWithoutAnimalorderNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderUpdateWithoutAnimalorderitemInput> = z
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
    supplier: z
      .lazy(() => supplierUpdateOneWithoutAnimalorderNestedInputObjectSchema)
      .optional(),
    employee: z
      .lazy(() => employeeUpdateOneWithoutAnimalorderNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const animalorderUpdateWithoutAnimalorderitemInputObjectSchema = Schema;
