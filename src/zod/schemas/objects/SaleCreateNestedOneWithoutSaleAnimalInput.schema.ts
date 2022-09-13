import { z } from 'zod';
import { SaleCreateWithoutSaleAnimalInputObjectSchema } from './SaleCreateWithoutSaleAnimalInput.schema';
import { SaleUncheckedCreateWithoutSaleAnimalInputObjectSchema } from './SaleUncheckedCreateWithoutSaleAnimalInput.schema';
import { SaleCreateOrConnectWithoutSaleAnimalInputObjectSchema } from './SaleCreateOrConnectWithoutSaleAnimalInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleCreateNestedOneWithoutSaleAnimalInput> =
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
        connect: z.lazy(() => SaleWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const SaleCreateNestedOneWithoutSaleAnimalInputObjectSchema = Schema;
