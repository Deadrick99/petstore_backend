import { z } from 'zod';
import { MerchandiseCreateNestedOneWithoutSaleItemInputObjectSchema } from './MerchandiseCreateNestedOneWithoutSaleItemInput.schema';
import { SaleCreateNestedOneWithoutSaleItemInputObjectSchema } from './SaleCreateNestedOneWithoutSaleItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemCreateInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    SALEPRICE: z.number().optional().nullable(),
    Merchandise: z.lazy(
      () => MerchandiseCreateNestedOneWithoutSaleItemInputObjectSchema,
    ),
    Sale: z.lazy(() => SaleCreateNestedOneWithoutSaleItemInputObjectSchema),
  })
  .strict();

export const SaleItemCreateInputObjectSchema = Schema;
