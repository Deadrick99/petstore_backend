import { z } from 'zod';
import { saleitemWhereUniqueInputObjectSchema } from './saleitemWhereUniqueInput.schema';
import { saleitemCreateWithoutSaleInputObjectSchema } from './saleitemCreateWithoutSaleInput.schema';
import { saleitemUncheckedCreateWithoutSaleInputObjectSchema } from './saleitemUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemCreateOrConnectWithoutSaleInput> = z
  .object({
    where: z.lazy(() => saleitemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => saleitemCreateWithoutSaleInputObjectSchema),
      z.lazy(() => saleitemUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const saleitemCreateOrConnectWithoutSaleInputObjectSchema = Schema;
