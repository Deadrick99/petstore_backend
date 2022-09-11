import { z } from 'zod';
import { saleCreateNestedOneWithoutSaleanimalInputObjectSchema } from './saleCreateNestedOneWithoutSaleanimalInput.schema';
import { animalCreateNestedOneWithoutSaleanimalInputObjectSchema } from './animalCreateNestedOneWithoutSaleanimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalCreateInput> = z
  .object({
    SALEPRICE: z.number().optional().nullable(),
    sale: z
      .lazy(() => saleCreateNestedOneWithoutSaleanimalInputObjectSchema)
      .optional(),
    animal: z
      .lazy(() => animalCreateNestedOneWithoutSaleanimalInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleanimalCreateInputObjectSchema = Schema;
