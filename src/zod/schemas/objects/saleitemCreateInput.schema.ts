import { z } from 'zod';
import { saleCreateNestedOneWithoutSaleitemInputObjectSchema } from './saleCreateNestedOneWithoutSaleitemInput.schema';
import { merchandiseCreateNestedOneWithoutSaleitemInputObjectSchema } from './merchandiseCreateNestedOneWithoutSaleitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemCreateInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    SALEPRICE: z.number().optional().nullable(),
    sale: z.lazy(() => saleCreateNestedOneWithoutSaleitemInputObjectSchema),
    merchandise: z.lazy(
      () => merchandiseCreateNestedOneWithoutSaleitemInputObjectSchema,
    ),
  })
  .strict();

export const saleitemCreateInputObjectSchema = Schema;
