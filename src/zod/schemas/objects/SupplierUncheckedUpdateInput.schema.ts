import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { AnimalOrderUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema } from './AnimalOrderUncheckedUpdateManyWithoutSupplierNestedInput.schema';
import { MerchandiseOrderUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema } from './MerchandiseOrderUncheckedUpdateManyWithoutSupplierNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUncheckedUpdateInput> = z
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
    CITYID: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    AnimalOrder: z
      .lazy(
        () =>
          AnimalOrderUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema,
      )
      .optional(),
    MerchandiseOrder: z
      .lazy(
        () =>
          MerchandiseOrderUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SupplierUncheckedUpdateInputObjectSchema = Schema;
