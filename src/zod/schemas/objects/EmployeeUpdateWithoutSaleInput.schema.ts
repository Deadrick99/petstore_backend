import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from './NullableDateTimeFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { CityUpdateOneWithoutEmployeeNestedInputObjectSchema } from './CityUpdateOneWithoutEmployeeNestedInput.schema';
import { AnimalOrderUpdateManyWithoutEmployeeNestedInputObjectSchema } from './AnimalOrderUpdateManyWithoutEmployeeNestedInput.schema';
import { MerchandiseOrderUpdateManyWithoutEmployeeNestedInputObjectSchema } from './MerchandiseOrderUpdateManyWithoutEmployeeNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateWithoutSaleInput> = z
  .object({
    EMPLOYEEID: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    LASTNAME: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    FIRSTNAME: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    PHONE: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    ADDRESS: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    ZIPCODE: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    TAXPAYERID: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    DATEHIRED: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    DATERELEASED: z
      .union([
        z.date(),
        z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    MANAGERID: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    EMPLOYEELEVEL: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    TITLE: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    City: z
      .lazy(() => CityUpdateOneWithoutEmployeeNestedInputObjectSchema)
      .optional(),
    AnimalOrder: z
      .lazy(() => AnimalOrderUpdateManyWithoutEmployeeNestedInputObjectSchema)
      .optional(),
    MerchandiseOrder: z
      .lazy(
        () => MerchandiseOrderUpdateManyWithoutEmployeeNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const EmployeeUpdateWithoutSaleInputObjectSchema = Schema;
