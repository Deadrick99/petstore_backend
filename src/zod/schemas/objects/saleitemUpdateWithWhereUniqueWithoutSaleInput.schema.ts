import { z } from 'zod';
import { saleitemWhereUniqueInputObjectSchema } from './saleitemWhereUniqueInput.schema';
import { saleitemUpdateWithoutSaleInputObjectSchema } from './saleitemUpdateWithoutSaleInput.schema';
import { saleitemUncheckedUpdateWithoutSaleInputObjectSchema } from './saleitemUncheckedUpdateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUpdateWithWhereUniqueWithoutSaleInput> =
  z
    .object({
      where: z.lazy(() => saleitemWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => saleitemUpdateWithoutSaleInputObjectSchema),
        z.lazy(() => saleitemUncheckedUpdateWithoutSaleInputObjectSchema),
      ]),
    })
    .strict();

export const saleitemUpdateWithWhereUniqueWithoutSaleInputObjectSchema = Schema;
