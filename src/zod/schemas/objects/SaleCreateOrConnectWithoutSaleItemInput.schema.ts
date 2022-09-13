import { z } from 'zod';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleCreateWithoutSaleItemInputObjectSchema } from './SaleCreateWithoutSaleItemInput.schema';
import { SaleUncheckedCreateWithoutSaleItemInputObjectSchema } from './SaleUncheckedCreateWithoutSaleItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateOrConnectWithoutSaleItemInput> = z
  .object({
    where: z.lazy(() => SaleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleCreateWithoutSaleItemInputObjectSchema),
      z.lazy(() => SaleUncheckedCreateWithoutSaleItemInputObjectSchema),
    ]),
  })
  .strict();

export const SaleCreateOrConnectWithoutSaleItemInputObjectSchema = Schema;
