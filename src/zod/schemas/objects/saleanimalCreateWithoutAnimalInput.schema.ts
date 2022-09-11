import { z } from 'zod';
import { saleCreateNestedOneWithoutSaleanimalInputObjectSchema } from './saleCreateNestedOneWithoutSaleanimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalCreateWithoutAnimalInput> = z
  .object({
    SALEPRICE: z.number().optional().nullable(),
    sale: z
      .lazy(() => saleCreateNestedOneWithoutSaleanimalInputObjectSchema)
      .optional(),
  })
  .strict();

export const saleanimalCreateWithoutAnimalInputObjectSchema = Schema;
