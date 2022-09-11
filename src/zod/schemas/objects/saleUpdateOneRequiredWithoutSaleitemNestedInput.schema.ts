import { z } from 'zod';
import { saleCreateWithoutSaleitemInputObjectSchema } from './saleCreateWithoutSaleitemInput.schema';
import { saleUncheckedCreateWithoutSaleitemInputObjectSchema } from './saleUncheckedCreateWithoutSaleitemInput.schema';
import { saleCreateOrConnectWithoutSaleitemInputObjectSchema } from './saleCreateOrConnectWithoutSaleitemInput.schema';
import { saleUpsertWithoutSaleitemInputObjectSchema } from './saleUpsertWithoutSaleitemInput.schema';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';
import { saleUpdateWithoutSaleitemInputObjectSchema } from './saleUpdateWithoutSaleitemInput.schema';
import { saleUncheckedUpdateWithoutSaleitemInputObjectSchema } from './saleUncheckedUpdateWithoutSaleitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUpdateOneRequiredWithoutSaleitemNestedInput> =
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
        upsert: z
          .lazy(() => saleUpsertWithoutSaleitemInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => saleWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => saleUpdateWithoutSaleitemInputObjectSchema),
            z.lazy(() => saleUncheckedUpdateWithoutSaleitemInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const saleUpdateOneRequiredWithoutSaleitemNestedInputObjectSchema =
  Schema;
