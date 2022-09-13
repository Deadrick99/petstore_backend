import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { AnimalUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema } from './AnimalUpdateOneRequiredWithoutSaleAnimalNestedInput.schema';
import { SaleUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema } from './SaleUpdateOneRequiredWithoutSaleAnimalNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalUpdateInput> = z
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
    Sale: z
      .lazy(() => SaleUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleAnimalUpdateInputObjectSchema = Schema;
