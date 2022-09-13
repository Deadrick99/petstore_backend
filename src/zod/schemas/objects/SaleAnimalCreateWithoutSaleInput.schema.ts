import { z } from 'zod';
import { AnimalCreateNestedOneWithoutSaleAnimalInputObjectSchema } from './AnimalCreateNestedOneWithoutSaleAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalCreateWithoutSaleInput> = z
  .object({
    SALEPRICE: z.number().optional().nullable(),
    Animal: z
      .lazy(() => AnimalCreateNestedOneWithoutSaleAnimalInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleAnimalCreateWithoutSaleInputObjectSchema = Schema;
