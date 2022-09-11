import { z } from 'zod';
import { DecimalFieldUpdateOperationsInputObjectSchema } from './DecimalFieldUpdateOperationsInput.schema';
import { NullableStringFieldUpdateOperationsInputObjectSchema } from './NullableStringFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { categoryUpdateOneWithoutMerchandiseNestedInputObjectSchema } from './categoryUpdateOneWithoutMerchandiseNestedInput.schema';
import { saleitemUpdateManyWithoutMerchandiseNestedInputObjectSchema } from './saleitemUpdateManyWithoutMerchandiseNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUpdateWithoutOrderitemInput> = z
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
    category: z
      .lazy(() => categoryUpdateOneWithoutMerchandiseNestedInputObjectSchema)
      .optional(),
    saleitem: z
      .lazy(() => saleitemUpdateManyWithoutMerchandiseNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const merchandiseUpdateWithoutOrderitemInputObjectSchema = Schema;
