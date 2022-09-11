import { z } from 'zod';
import { saleCreateWithoutSaleitemInputObjectSchema } from './saleCreateWithoutSaleitemInput.schema';
import { saleUncheckedCreateWithoutSaleitemInputObjectSchema } from './saleUncheckedCreateWithoutSaleitemInput.schema';
import { saleCreateOrConnectWithoutSaleitemInputObjectSchema } from './saleCreateOrConnectWithoutSaleitemInput.schema';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleCreateNestedOneWithoutSaleitemInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleCreateWithoutSaleitemInputObjectSchema),
            z.lazy(() => saleUncheckedCreateWithoutSaleitemInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => saleCreateOrConnectWithoutSaleitemInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => saleWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const saleCreateNestedOneWithoutSaleitemInputObjectSchema = Schema;
