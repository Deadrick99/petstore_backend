import { z } from 'zod';
import { SaleCreateWithoutSaleItemInputObjectSchema } from './SaleCreateWithoutSaleItemInput.schema';
import { SaleUncheckedCreateWithoutSaleItemInputObjectSchema } from './SaleUncheckedCreateWithoutSaleItemInput.schema';
import { SaleCreateOrConnectWithoutSaleItemInputObjectSchema } from './SaleCreateOrConnectWithoutSaleItemInput.schema';
import { SaleUpsertWithoutSaleItemInputObjectSchema } from './SaleUpsertWithoutSaleItemInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutSaleItemInputObjectSchema } from './SaleUpdateWithoutSaleItemInput.schema';
import { SaleUncheckedUpdateWithoutSaleItemInputObjectSchema } from './SaleUncheckedUpdateWithoutSaleItemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateOneRequiredWithoutSaleItemNestedInput> =
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
        upsert: z
          .lazy(() => SaleUpsertWithoutSaleItemInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => SaleWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => SaleUpdateWithoutSaleItemInputObjectSchema),
            z.lazy(() => SaleUncheckedUpdateWithoutSaleItemInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SaleUpdateOneRequiredWithoutSaleItemNestedInputObjectSchema =
  Schema;
