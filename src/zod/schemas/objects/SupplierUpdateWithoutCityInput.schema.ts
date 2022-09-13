import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { AnimalOrderUpdateManyWithoutSupplierNestedInputObjectSchema } from './AnimalOrderUpdateManyWithoutSupplierNestedInput.schema';
import { MerchandiseOrderUpdateManyWithoutSupplierNestedInputObjectSchema } from './MerchandiseOrderUpdateManyWithoutSupplierNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SupplierUpdateWithoutCityInput> = z
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
    AnimalOrder: z
      .lazy(() => AnimalOrderUpdateManyWithoutSupplierNestedInputObjectSchema)
      .optional(),
    MerchandiseOrder: z
      .lazy(
        () => MerchandiseOrderUpdateManyWithoutSupplierNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SupplierUpdateWithoutCityInputObjectSchema = Schema;
