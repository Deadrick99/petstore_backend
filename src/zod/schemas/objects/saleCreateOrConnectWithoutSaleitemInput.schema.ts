import { z } from 'zod';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';
import { saleCreateWithoutSaleitemInputObjectSchema } from './saleCreateWithoutSaleitemInput.schema';
import { saleUncheckedCreateWithoutSaleitemInputObjectSchema } from './saleUncheckedCreateWithoutSaleitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleCreateOrConnectWithoutSaleitemInput> = z
  .object({
    where: z.lazy(() => saleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => saleCreateWithoutSaleitemInputObjectSchema),
      z.lazy(() => saleUncheckedCreateWithoutSaleitemInputObjectSchema),
    ]),
  })
  .strict();

export const saleCreateOrConnectWithoutSaleitemInputObjectSchema = Schema;
