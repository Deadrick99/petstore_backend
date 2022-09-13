import { z } from 'zod';
import { AnimalCreateNestedOneWithoutSaleAnimalInputObjectSchema } from './AnimalCreateNestedOneWithoutSaleAnimalInput.schema';
import { SaleCreateNestedOneWithoutSaleAnimalInputObjectSchema } from './SaleCreateNestedOneWithoutSaleAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalCreateInput> = z
  .object({
    SALEPRICE: z.number().optional().nullable(),
    Animal: z
      .lazy(() => AnimalCreateNestedOneWithoutSaleAnimalInputObjectSchema)
      .optional(),
    Sale: z
      .lazy(() => SaleCreateNestedOneWithoutSaleAnimalInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleAnimalCreateInputObjectSchema = Schema;
