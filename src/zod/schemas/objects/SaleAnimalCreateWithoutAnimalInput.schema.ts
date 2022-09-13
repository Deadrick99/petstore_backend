import { z } from 'zod';
import { SaleCreateNestedOneWithoutSaleAnimalInputObjectSchema } from './SaleCreateNestedOneWithoutSaleAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalCreateWithoutAnimalInput> = z
  .object({
    SALEPRICE: z.number().optional().nullable(),
    Sale: z
      .lazy(() => SaleCreateNestedOneWithoutSaleAnimalInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleAnimalCreateWithoutAnimalInputObjectSchema = Schema;
