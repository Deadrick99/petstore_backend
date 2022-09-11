import { z } from 'zod';
import { saleitemCreateWithoutSaleInputObjectSchema } from './saleitemCreateWithoutSaleInput.schema';
import { saleitemUncheckedCreateWithoutSaleInputObjectSchema } from './saleitemUncheckedCreateWithoutSaleInput.schema';
import { saleitemCreateOrConnectWithoutSaleInputObjectSchema } from './saleitemCreateOrConnectWithoutSaleInput.schema';
import { saleitemWhereUniqueInputObjectSchema } from './saleitemWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUncheckedCreateNestedManyWithoutSaleInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleitemCreateWithoutSaleInputObjectSchema),
            z.lazy(() => saleitemCreateWithoutSaleInputObjectSchema).array(),
            z.lazy(() => saleitemUncheckedCreateWithoutSaleInputObjectSchema),
            z
              .lazy(() => saleitemUncheckedCreateWithoutSaleInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => saleitemCreateOrConnectWithoutSaleInputObjectSchema),
            z
              .lazy(() => saleitemCreateOrConnectWithoutSaleInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => saleitemWhereUniqueInputObjectSchema),
            z.lazy(() => saleitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const saleitemUncheckedCreateNestedManyWithoutSaleInputObjectSchema =
  Schema;
