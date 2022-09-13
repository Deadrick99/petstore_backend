import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { CategoryUpdateOneWithoutMerchandiseNestedInputObjectSchema } from './CategoryUpdateOneWithoutMerchandiseNestedInput.schema';
import { OrderItemUpdateManyWithoutMerchandiseNestedInputObjectSchema } from './OrderItemUpdateManyWithoutMerchandiseNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUpdateWithoutSaleItemInput> = z
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
    Category: z
      .lazy(() => CategoryUpdateOneWithoutMerchandiseNestedInputObjectSchema)
      .optional(),
    OrderItem: z
      .lazy(() => OrderItemUpdateManyWithoutMerchandiseNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MerchandiseUpdateWithoutSaleItemInputObjectSchema = Schema;
