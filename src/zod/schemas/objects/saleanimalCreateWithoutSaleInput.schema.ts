import { z } from 'zod';
import { animalCreateNestedOneWithoutSaleanimalInputObjectSchema } from './animalCreateNestedOneWithoutSaleanimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalCreateWithoutSaleInput> = z
  .object({
    SALEPRICE: z.number().optional().nullable(),
    animal: z
      .lazy(() => animalCreateNestedOneWithoutSaleanimalInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleanimalCreateWithoutSaleInputObjectSchema = Schema;
