import { z } from 'zod';
import { merchandiseCreateWithoutSaleitemInputObjectSchema } from './merchandiseCreateWithoutSaleitemInput.schema';
import { merchandiseUncheckedCreateWithoutSaleitemInputObjectSchema } from './merchandiseUncheckedCreateWithoutSaleitemInput.schema';
import { merchandiseCreateOrConnectWithoutSaleitemInputObjectSchema } from './merchandiseCreateOrConnectWithoutSaleitemInput.schema';
import { merchandiseWhereUniqueInputObjectSchema } from './merchandiseWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseCreateNestedOneWithoutSaleitemInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => merchandiseCreateWithoutSaleitemInputObjectSchema),
            z.lazy(
              () => merchandiseUncheckedCreateWithoutSaleitemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => merchandiseCreateOrConnectWithoutSaleitemInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .lazy(() => merchandiseWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
  ]);

export const merchandiseCreateNestedOneWithoutSaleitemInputObjectSchema =
  Schema;
