import { z } from 'zod';
import { SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemUpdateWithoutSaleInputObjectSchema } from './SaleItemUpdateWithoutSaleInput.schema';
import { SaleItemUncheckedUpdateWithoutSaleInputObjectSchema } from './SaleItemUncheckedUpdateWithoutSaleInput.schema';
import { SaleItemCreateWithoutSaleInputObjectSchema } from './SaleItemCreateWithoutSaleInput.schema';
import { SaleItemUncheckedCreateWithoutSaleInputObjectSchema } from './SaleItemUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUpsertWithWhereUniqueWithoutSaleInput> =
  z
    .object({
      where: z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => SaleItemUpdateWithoutSaleInputObjectSchema),
        z.lazy(() => SaleItemUncheckedUpdateWithoutSaleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => SaleItemCreateWithoutSaleInputObjectSchema),
        z.lazy(() => SaleItemUncheckedCreateWithoutSaleInputObjectSchema),
      ]),
    })
    .strict();

export const SaleItemUpsertWithWhereUniqueWithoutSaleInputObjectSchema = Schema;
