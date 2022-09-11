import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { saleUpdateOneRequiredWithoutSaleitemNestedInputObjectSchema } from './saleUpdateOneRequiredWithoutSaleitemNestedInput.schema';
import { merchandiseUpdateOneRequiredWithoutSaleitemNestedInputObjectSchema } from './merchandiseUpdateOneRequiredWithoutSaleitemNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUpdateInput> = z
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
    merchandise: z
      .lazy(
        () =>
          merchandiseUpdateOneRequiredWithoutSaleitemNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const saleitemUpdateInputObjectSchema = Schema;
