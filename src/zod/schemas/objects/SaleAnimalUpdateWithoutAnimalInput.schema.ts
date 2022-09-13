import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { SaleUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema } from './SaleUpdateOneRequiredWithoutSaleAnimalNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalUpdateWithoutAnimalInput> = z
  .object({
    SALEPRICE: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Sale: z
      .lazy(() => SaleUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleAnimalUpdateWithoutAnimalInputObjectSchema = Schema;
