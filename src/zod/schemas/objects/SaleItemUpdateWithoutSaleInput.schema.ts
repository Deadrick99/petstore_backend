import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { MerchandiseUpdateOneRequiredWithoutSaleItemNestedInputObjectSchema } from './MerchandiseUpdateOneRequiredWithoutSaleItemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUpdateWithoutSaleInput> = z
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
    Merchandise: z
      .lazy(
        () =>
          MerchandiseUpdateOneRequiredWithoutSaleItemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SaleItemUpdateWithoutSaleInputObjectSchema = Schema;
