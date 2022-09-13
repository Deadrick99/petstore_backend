import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { CategoryUpdateOneWithoutMerchandiseNestedInputObjectSchema } from './CategoryUpdateOneWithoutMerchandiseNestedInput.schema';
import { OrderItemUpdateManyWithoutMerchandiseNestedInputObjectSchema } from './OrderItemUpdateManyWithoutMerchandiseNestedInput.schema';
import { SaleItemUpdateManyWithoutMerchandiseNestedInputObjectSchema } from './SaleItemUpdateManyWithoutMerchandiseNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUpdateInput> = z
  .object({
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
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
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
    SaleItem: z
      .lazy(() => SaleItemUpdateManyWithoutMerchandiseNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const MerchandiseUpdateInputObjectSchema = Schema;
