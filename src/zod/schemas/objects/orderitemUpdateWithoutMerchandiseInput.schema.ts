import { z } from 'zod';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { merchandiseorderUpdateOneRequiredWithoutOrderitemNestedInputObjectSchema } from './merchandiseorderUpdateOneRequiredWithoutOrderitemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemUpdateWithoutMerchandiseInput> = z
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
    merchandiseorder: z
      .lazy(
        () =>
          merchandiseorderUpdateOneRequiredWithoutOrderitemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const orderitemUpdateWithoutMerchandiseInputObjectSchema = Schema;
