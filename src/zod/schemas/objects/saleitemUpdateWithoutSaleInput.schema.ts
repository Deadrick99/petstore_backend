import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { merchandiseUpdateOneRequiredWithoutSaleitemNestedInputObjectSchema } from './merchandiseUpdateOneRequiredWithoutSaleitemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUpdateWithoutSaleInput> = z
  .object({
    QUANTITY: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    SALEPRICE: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    merchandise: z
      .lazy(
        () =>
          merchandiseUpdateOneRequiredWithoutSaleitemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const saleitemUpdateWithoutSaleInputObjectSchema = Schema;
