import { z } from 'zod';
import { SaleCreateWithoutSaleItemInputObjectSchema } from './SaleCreateWithoutSaleItemInput.schema';
import { SaleUncheckedCreateWithoutSaleItemInputObjectSchema } from './SaleUncheckedCreateWithoutSaleItemInput.schema';
import { SaleCreateOrConnectWithoutSaleItemInputObjectSchema } from './SaleCreateOrConnectWithoutSaleItemInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateNestedOneWithoutSaleItemInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleCreateWithoutSaleItemInputObjectSchema),
            z.lazy(() => SaleUncheckedCreateWithoutSaleItemInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => SaleCreateOrConnectWithoutSaleItemInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => SaleWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const SaleCreateNestedOneWithoutSaleItemInputObjectSchema = Schema;
