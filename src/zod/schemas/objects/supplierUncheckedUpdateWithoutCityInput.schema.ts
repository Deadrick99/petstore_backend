import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { animalorderUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema } from './animalorderUncheckedUpdateManyWithoutSupplierNestedInput.schema';
import { merchandiseorderUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema } from './merchandiseorderUncheckedUpdateManyWithoutSupplierNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierUncheckedUpdateWithoutCityInput> = z
  .object({
    SUPPLIERID: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    NAME: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    CONTACTNAME: z
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
    animalorder: z
      .lazy(
        () =>
          animalorderUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema,
      )
      .optional(),
    merchandiseorder: z
      .lazy(
        () =>
          merchandiseorderUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const supplierUncheckedUpdateWithoutCityInputObjectSchema = Schema;
