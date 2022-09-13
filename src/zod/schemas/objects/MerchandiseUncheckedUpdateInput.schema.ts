import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { OrderItemUncheckedUpdateManyWithoutMerchandiseNestedInputObjectSchema } from './OrderItemUncheckedUpdateManyWithoutMerchandiseNestedInput.schema';
import { SaleItemUncheckedUpdateManyWithoutMerchandiseNestedInputObjectSchema } from './SaleItemUncheckedUpdateManyWithoutMerchandiseNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUncheckedUpdateInput> = z
  .object({
    ITEMID: z
      .union([
        z.number(),
        z.lazy(() => DecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    DESCRIPTION: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    QUANTITYONHAND: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    LISTPRICE: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    CATEGORY: z
      .union([
        z.string(),
        z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    OrderItem: z
      .lazy(
        () =>
          OrderItemUncheckedUpdateManyWithoutMerchandiseNestedInputObjectSchema,
      )
      .optional(),
    SaleItem: z
      .lazy(
        () =>
          SaleItemUncheckedUpdateManyWithoutMerchandiseNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const MerchandiseUncheckedUpdateInputObjectSchema = Schema;
