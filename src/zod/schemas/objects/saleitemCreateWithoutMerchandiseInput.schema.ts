import { z } from 'zod';
import { saleCreateNestedOneWithoutSaleitemInputObjectSchema } from './saleCreateNestedOneWithoutSaleitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemCreateWithoutMerchandiseInput> = z
  .object({
    QUANTITY: z.number().optional().nullable(),
    SALEPRICE: z.number().optional().nullable(),
    sale: z.lazy(() => saleCreateNestedOneWithoutSaleitemInputObjectSchema),
  })
  .strict();

export const saleitemCreateWithoutMerchandiseInputObjectSchema = Schema;
