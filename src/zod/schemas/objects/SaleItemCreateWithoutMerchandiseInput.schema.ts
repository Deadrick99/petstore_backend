import { z } from 'zod';
import { SaleCreateNestedOneWithoutSaleItemInputObjectSchema } from './SaleCreateNestedOneWithoutSaleItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemCreateWithoutMerchandiseInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    SALEPRICE: z.number().optional().nullable(),
    Sale: z.lazy(() => SaleCreateNestedOneWithoutSaleItemInputObjectSchema),
  })
  .strict();

export const SaleItemCreateWithoutMerchandiseInputObjectSchema = Schema;
