import { z } from 'zod';
import { SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemCreateWithoutSaleInputObjectSchema } from './SaleItemCreateWithoutSaleInput.schema';
import { SaleItemUncheckedCreateWithoutSaleInputObjectSchema } from './SaleItemUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemCreateOrConnectWithoutSaleInput> = z
  .object({
    where: z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SaleItemCreateWithoutSaleInputObjectSchema),
      z.lazy(() => SaleItemUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const SaleItemCreateOrConnectWithoutSaleInputObjectSchema = Schema;
