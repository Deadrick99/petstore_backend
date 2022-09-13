import { z } from 'zod';
import { SaleItemCreateWithoutSaleInputObjectSchema } from './SaleItemCreateWithoutSaleInput.schema';
import { SaleItemUncheckedCreateWithoutSaleInputObjectSchema } from './SaleItemUncheckedCreateWithoutSaleInput.schema';
import { SaleItemCreateOrConnectWithoutSaleInputObjectSchema } from './SaleItemCreateOrConnectWithoutSaleInput.schema';
import { SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemCreateNestedManyWithoutSaleInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleItemCreateWithoutSaleInputObjectSchema),
            z.lazy(() => SaleItemCreateWithoutSaleInputObjectSchema).array(),
            z.lazy(() => SaleItemUncheckedCreateWithoutSaleInputObjectSchema),
            z
              .lazy(() => SaleItemUncheckedCreateWithoutSaleInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => SaleItemCreateOrConnectWithoutSaleInputObjectSchema),
            z
              .lazy(() => SaleItemCreateOrConnectWithoutSaleInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
            z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SaleItemCreateNestedManyWithoutSaleInputObjectSchema = Schema;
