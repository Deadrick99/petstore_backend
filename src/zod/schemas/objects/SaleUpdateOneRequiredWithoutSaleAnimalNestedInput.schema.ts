import { z } from 'zod';
import { SaleCreateWithoutSaleAnimalInputObjectSchema } from './SaleCreateWithoutSaleAnimalInput.schema';
import { SaleUncheckedCreateWithoutSaleAnimalInputObjectSchema } from './SaleUncheckedCreateWithoutSaleAnimalInput.schema';
import { SaleCreateOrConnectWithoutSaleAnimalInputObjectSchema } from './SaleCreateOrConnectWithoutSaleAnimalInput.schema';
import { SaleUpsertWithoutSaleAnimalInputObjectSchema } from './SaleUpsertWithoutSaleAnimalInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithoutSaleAnimalInputObjectSchema } from './SaleUpdateWithoutSaleAnimalInput.schema';
import { SaleUncheckedUpdateWithoutSaleAnimalInputObjectSchema } from './SaleUncheckedUpdateWithoutSaleAnimalInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateOneRequiredWithoutSaleAnimalNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleCreateWithoutSaleAnimalInputObjectSchema),
            z.lazy(() => SaleUncheckedCreateWithoutSaleAnimalInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => SaleCreateOrConnectWithoutSaleAnimalInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => SaleUpsertWithoutSaleAnimalInputObjectSchema)
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
            z.lazy(() => SaleUpdateWithoutSaleAnimalInputObjectSchema),
            z.lazy(() => SaleUncheckedUpdateWithoutSaleAnimalInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SaleUpdateOneRequiredWithoutSaleAnimalNestedInputObjectSchema =
  Schema;
