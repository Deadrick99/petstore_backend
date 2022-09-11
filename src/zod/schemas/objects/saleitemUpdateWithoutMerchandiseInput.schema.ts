import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { saleUpdateOneRequiredWithoutSaleitemNestedInputObjectSchema } from './saleUpdateOneRequiredWithoutSaleitemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUpdateWithoutMerchandiseInput> = z
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
    sale: z
      .lazy(() => saleUpdateOneRequiredWithoutSaleitemNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleitemUpdateWithoutMerchandiseInputObjectSchema = Schema;
