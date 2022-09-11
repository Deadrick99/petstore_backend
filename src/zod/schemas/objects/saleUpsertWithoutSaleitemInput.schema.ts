import { z } from 'zod';
import { saleUpdateWithoutSaleitemInputObjectSchema } from './saleUpdateWithoutSaleitemInput.schema';
import { saleUncheckedUpdateWithoutSaleitemInputObjectSchema } from './saleUncheckedUpdateWithoutSaleitemInput.schema';
import { saleCreateWithoutSaleitemInputObjectSchema } from './saleCreateWithoutSaleitemInput.schema';
import { saleUncheckedCreateWithoutSaleitemInputObjectSchema } from './saleUncheckedCreateWithoutSaleitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUpsertWithoutSaleitemInput> = z
  .object({
    update: z.union([
      z.lazy(() => saleUpdateWithoutSaleitemInputObjectSchema),
      z.lazy(() => saleUncheckedUpdateWithoutSaleitemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => saleCreateWithoutSaleitemInputObjectSchema),
      z.lazy(() => saleUncheckedCreateWithoutSaleitemInputObjectSchema),
    ]),
  })
  .strict();

export const saleUpsertWithoutSaleitemInputObjectSchema = Schema;
