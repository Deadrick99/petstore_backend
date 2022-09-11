import { z } from 'zod';
import { merchandiseCreateNestedOneWithoutSaleitemInputObjectSchema } from './merchandiseCreateNestedOneWithoutSaleitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemCreateWithoutSaleInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    SALEPRICE: z.number().optional().nullable(),
    merchandise: z.lazy(
      () => merchandiseCreateNestedOneWithoutSaleitemInputObjectSchema,
    ),
  })
  .strict();

export const saleitemCreateWithoutSaleInputObjectSchema = Schema;
