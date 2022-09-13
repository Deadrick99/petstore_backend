import { z } from 'zod';
import { SaleUpdateWithoutSaleItemInputObjectSchema } from './SaleUpdateWithoutSaleItemInput.schema';
import { SaleUncheckedUpdateWithoutSaleItemInputObjectSchema } from './SaleUncheckedUpdateWithoutSaleItemInput.schema';
import { SaleCreateWithoutSaleItemInputObjectSchema } from './SaleCreateWithoutSaleItemInput.schema';
import { SaleUncheckedCreateWithoutSaleItemInputObjectSchema } from './SaleUncheckedCreateWithoutSaleItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpsertWithoutSaleItemInput> = z
  .object({
    update: z.union([
      z.lazy(() => SaleUpdateWithoutSaleItemInputObjectSchema),
      z.lazy(() => SaleUncheckedUpdateWithoutSaleItemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SaleCreateWithoutSaleItemInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutSaleItemInputObjectSchema),
    ]),
  })
  .strict();

export const SaleUpsertWithoutSaleItemInputObjectSchema = Schema;
