import { z } from 'zod';
import { NullableIntFieldUpdateOperationsInputObjectSchema } from './NullableIntFieldUpdateOperationsInput.schema';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { SaleUpdateOneRequiredWithoutSaleItemNestedInputObjectSchema } from './SaleUpdateOneRequiredWithoutSaleItemNestedInput.schema';
import { MerchandiseUpdateOneRequiredWithoutSaleItemNestedInputObjectSchema } from './MerchandiseUpdateOneRequiredWithoutSaleItemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUpdateInput> = z
  .object({
    QUANTITY: z
      .union([
        z.number(),
        z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema),
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
    Merchandise: z
      .lazy(
        () =>
          MerchandiseUpdateOneRequiredWithoutSaleItemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SaleItemUpdateInputObjectSchema = Schema;
