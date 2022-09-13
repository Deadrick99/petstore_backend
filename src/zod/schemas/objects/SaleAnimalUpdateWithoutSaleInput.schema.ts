import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { AnimalUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema } from './AnimalUpdateOneRequiredWithoutSaleAnimalNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalUpdateWithoutSaleInput> = z
  .object({
    SALEPRICE: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    Animal: z
      .lazy(
        () => AnimalUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SaleAnimalUpdateWithoutSaleInputObjectSchema = Schema;
