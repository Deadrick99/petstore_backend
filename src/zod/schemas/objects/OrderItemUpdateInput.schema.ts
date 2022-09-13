import { z } from 'zod';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { MerchandiseUpdateOneRequiredWithoutOrderItemNestedInputObjectSchema } from './MerchandiseUpdateOneRequiredWithoutOrderItemNestedInput.schema';
import { MerchandiseOrderUpdateOneRequiredWithoutOrderItemNestedInputObjectSchema } from './MerchandiseOrderUpdateOneRequiredWithoutOrderItemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpdateInput> = z
  .object({
    QUANTITY: z
      .union([
        z.number(),
        z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    COST: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Merchandise: z
      .lazy(
        () =>
          MerchandiseUpdateOneRequiredWithoutOrderItemNestedInputObjectSchema,
      )
      .optional(),
    MerchandiseOrder: z
      .lazy(
        () =>
          MerchandiseOrderUpdateOneRequiredWithoutOrderItemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const OrderItemUpdateInputObjectSchema = Schema;
