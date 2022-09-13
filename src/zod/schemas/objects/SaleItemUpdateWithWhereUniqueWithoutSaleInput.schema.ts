import { z } from 'zod';
import { SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemUpdateWithoutSaleInputObjectSchema } from './SaleItemUpdateWithoutSaleInput.schema';
import { SaleItemUncheckedUpdateWithoutSaleInputObjectSchema } from './SaleItemUncheckedUpdateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUpdateWithWhereUniqueWithoutSaleInput> =
  z
    .object({
      where: z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => SaleItemUpdateWithoutSaleInputObjectSchema),
        z.lazy(() => SaleItemUncheckedUpdateWithoutSaleInputObjectSchema),
      ]),
    })
    .strict();

export const SaleItemUpdateWithWhereUniqueWithoutSaleInputObjectSchema = Schema;
