import { z } from 'zod';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { MerchandiseUpdateOneRequiredWithoutOrderItemNestedInputObjectSchema } from './MerchandiseUpdateOneRequiredWithoutOrderItemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.OrderItemUpdateWithoutMerchandiseOrderInput> = z
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
  })
  .strict();

export const OrderItemUpdateWithoutMerchandiseOrderInputObjectSchema = Schema;
