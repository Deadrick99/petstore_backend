import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { saleUpdateOneRequiredWithoutSaleanimalNestedInputObjectSchema } from './saleUpdateOneRequiredWithoutSaleanimalNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalUpdateWithoutAnimalInput> = z
  .object({
    SALEPRICE: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    sale: z
      .lazy(() => saleUpdateOneRequiredWithoutSaleanimalNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleanimalUpdateWithoutAnimalInputObjectSchema = Schema;
