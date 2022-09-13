import { z } from 'zod';
import { MerchandiseCreateNestedOneWithoutSaleItemInputObjectSchema } from './MerchandiseCreateNestedOneWithoutSaleItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemCreateWithoutSaleInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    SALEPRICE: z.number().optional().nullable(),
    Merchandise: z.lazy(
      () => MerchandiseCreateNestedOneWithoutSaleItemInputObjectSchema,
    ),
  })
  .strict();

export const SaleItemCreateWithoutSaleInputObjectSchema = Schema;
