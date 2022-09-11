import { z } from 'zod';
import { saleitemWhereUniqueInputObjectSchema } from './saleitemWhereUniqueInput.schema';
import { saleitemUpdateWithoutSaleInputObjectSchema } from './saleitemUpdateWithoutSaleInput.schema';
import { saleitemUncheckedUpdateWithoutSaleInputObjectSchema } from './saleitemUncheckedUpdateWithoutSaleInput.schema';
import { saleitemCreateWithoutSaleInputObjectSchema } from './saleitemCreateWithoutSaleInput.schema';
import { saleitemUncheckedCreateWithoutSaleInputObjectSchema } from './saleitemUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUpsertWithWhereUniqueWithoutSaleInput> =
  z
    .object({
      where: z.lazy(() => saleitemWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => saleitemUpdateWithoutSaleInputObjectSchema),
        z.lazy(() => saleitemUncheckedUpdateWithoutSaleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => saleitemCreateWithoutSaleInputObjectSchema),
        z.lazy(() => saleitemUncheckedCreateWithoutSaleInputObjectSchema),
      ]),
    })
    .strict();

export const saleitemUpsertWithWhereUniqueWithoutSaleInputObjectSchema = Schema;
