import { z } from 'zod';
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from './NullableFloatFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { merchandiseorderUpdateOneRequiredWithoutOrderitemNestedInputObjectSchema } from './merchandiseorderUpdateOneRequiredWithoutOrderitemNestedInput.schema';
import { merchandiseUpdateOneRequiredWithoutOrderitemNestedInputObjectSchema } from './merchandiseUpdateOneRequiredWithoutOrderitemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemUpdateInput> = z
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
    merchandise: z
      .lazy(
        () =>
          merchandiseUpdateOneRequiredWithoutOrderitemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const orderitemUpdateInputObjectSchema = Schema;
