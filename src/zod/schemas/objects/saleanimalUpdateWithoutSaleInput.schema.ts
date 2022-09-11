import { z } from 'zod';
import { NullableDecimalFieldUpdateOperationsInputObjectSchema } from './NullableDecimalFieldUpdateOperationsInput.schema';
import { animalUpdateOneRequiredWithoutSaleanimalNestedInputObjectSchema } from './animalUpdateOneRequiredWithoutSaleanimalNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalUpdateWithoutSaleInput> = z
  .object({
    SALEPRICE: z
      .union([
        z.number(),
        z.lazy(() => NullableDecimalFieldUpdateOperationsInputObjectSchema),
      ])
      .optional()
      .nullable(),
    animal: z
      .lazy(
        () => animalUpdateOneRequiredWithoutSaleanimalNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const saleanimalUpdateWithoutSaleInputObjectSchema = Schema;
