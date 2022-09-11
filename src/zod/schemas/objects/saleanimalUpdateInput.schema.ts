import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { saleUpdateOneRequiredWithoutSaleanimalNestedInputObjectSchema } from './saleUpdateOneRequiredWithoutSaleanimalNestedInput.schema';
import { animalUpdateOneRequiredWithoutSaleanimalNestedInputObjectSchema } from './animalUpdateOneRequiredWithoutSaleanimalNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalUpdateInput> = z
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
    animal: z
      .lazy(
        () => animalUpdateOneRequiredWithoutSaleanimalNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const saleanimalUpdateInputObjectSchema = Schema;
