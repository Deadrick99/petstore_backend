import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { SaleUpdateOneRequiredWithoutSaleItemNestedInputObjectSchema } from './SaleUpdateOneRequiredWithoutSaleItemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUpdateWithoutMerchandiseInput> = z
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
    Sale: z
      .lazy(() => SaleUpdateOneRequiredWithoutSaleItemNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleItemUpdateWithoutMerchandiseInputObjectSchema = Schema;
