import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { SaleUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema } from './SaleUpdateOneRequiredWithoutSaleAnimalNestedInput.schema';
import { AnimalUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema } from './AnimalUpdateOneRequiredWithoutSaleAnimalNestedInput.schema';

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
    Sale: z
      .lazy(() => SaleUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema)
      .optional(),
    Animal: z
      .lazy(
        () => AnimalUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const SaleAnimalUpdateInputObjectSchema = Schema;
