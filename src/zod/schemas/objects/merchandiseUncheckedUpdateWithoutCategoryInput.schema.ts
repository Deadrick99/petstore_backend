import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { orderitemUncheckedUpdateManyWithoutMerchandiseNestedInputObjectSchema } from './orderitemUncheckedUpdateManyWithoutMerchandiseNestedInput.schema';
import { saleitemUncheckedUpdateManyWithoutMerchandiseNestedInputObjectSchema } from './saleitemUncheckedUpdateManyWithoutMerchandiseNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUncheckedUpdateWithoutCategoryInput> =
  z
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
      orderitem: z
        .lazy(
          () =>
            orderitemUncheckedUpdateManyWithoutMerchandiseNestedInputObjectSchema,
        )
        .optional(),
      saleitem: z
        .lazy(
          () =>
            saleitemUncheckedUpdateManyWithoutMerchandiseNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const merchandiseUncheckedUpdateWithoutCategoryInputObjectSchema =
  Schema;
