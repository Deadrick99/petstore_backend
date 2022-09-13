import { z } from 'zod';
import { SaleCreateNestedOneWithoutSaleItemInputObjectSchema } from './SaleCreateNestedOneWithoutSaleItemInput.schema';
import { MerchandiseCreateNestedOneWithoutSaleItemInputObjectSchema } from './MerchandiseCreateNestedOneWithoutSaleItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemCreateInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    SALEPRICE: z.number().optional().nullable(),
    Sale: z.lazy(() => SaleCreateNestedOneWithoutSaleItemInputObjectSchema),
    Merchandise: z.lazy(
      () => MerchandiseCreateNestedOneWithoutSaleItemInputObjectSchema,
    ),
  })
  .strict();

export const SaleItemCreateInputObjectSchema = Schema;
