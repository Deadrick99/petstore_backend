import { z } from 'zod';
import { merchandiseUpdateWithoutSaleitemInputObjectSchema } from './merchandiseUpdateWithoutSaleitemInput.schema';
import { merchandiseUncheckedUpdateWithoutSaleitemInputObjectSchema } from './merchandiseUncheckedUpdateWithoutSaleitemInput.schema';
import { merchandiseCreateWithoutSaleitemInputObjectSchema } from './merchandiseCreateWithoutSaleitemInput.schema';
import { merchandiseUncheckedCreateWithoutSaleitemInputObjectSchema } from './merchandiseUncheckedCreateWithoutSaleitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUpsertWithoutSaleitemInput> = z
  .object({
    update: z.union([
      z.lazy(() => merchandiseUpdateWithoutSaleitemInputObjectSchema),
      z.lazy(() => merchandiseUncheckedUpdateWithoutSaleitemInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => merchandiseCreateWithoutSaleitemInputObjectSchema),
      z.lazy(() => merchandiseUncheckedCreateWithoutSaleitemInputObjectSchema),
    ]),
  })
  .strict();

export const merchandiseUpsertWithoutSaleitemInputObjectSchema = Schema;
