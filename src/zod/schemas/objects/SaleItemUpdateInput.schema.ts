import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { MerchandiseUpdateOneRequiredWithoutSaleItemNestedInputObjectSchema } from './MerchandiseUpdateOneRequiredWithoutSaleItemNestedInput.schema';
import { SaleUpdateOneRequiredWithoutSaleItemNestedInputObjectSchema } from './SaleUpdateOneRequiredWithoutSaleItemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUpdateInput> = z
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
    Sale: z
      .lazy(() => SaleUpdateOneRequiredWithoutSaleItemNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleItemUpdateInputObjectSchema = Schema;
