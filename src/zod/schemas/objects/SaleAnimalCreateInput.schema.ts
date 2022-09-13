import { z } from 'zod';
import { SaleCreateNestedOneWithoutSaleAnimalInputObjectSchema } from './SaleCreateNestedOneWithoutSaleAnimalInput.schema';
import { AnimalCreateNestedOneWithoutSaleAnimalInputObjectSchema } from './AnimalCreateNestedOneWithoutSaleAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalCreateInput> = z
  .object({
    SALEPRICE: z.number().optional().nullable(),
    Sale: z
      .lazy(() => SaleCreateNestedOneWithoutSaleAnimalInputObjectSchema)
      .optional(),
    Animal: z
      .lazy(() => AnimalCreateNestedOneWithoutSaleAnimalInputObjectSchema)
      .optional(),
  })
  .strict();

export const SaleAnimalCreateInputObjectSchema = Schema;
