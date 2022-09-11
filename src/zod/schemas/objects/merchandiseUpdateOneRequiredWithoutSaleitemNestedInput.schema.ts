import { z } from 'zod';
import { merchandiseCreateWithoutSaleitemInputObjectSchema } from './merchandiseCreateWithoutSaleitemInput.schema';
import { merchandiseUncheckedCreateWithoutSaleitemInputObjectSchema } from './merchandiseUncheckedCreateWithoutSaleitemInput.schema';
import { merchandiseCreateOrConnectWithoutSaleitemInputObjectSchema } from './merchandiseCreateOrConnectWithoutSaleitemInput.schema';
import { merchandiseUpsertWithoutSaleitemInputObjectSchema } from './merchandiseUpsertWithoutSaleitemInput.schema';
import { merchandiseWhereUniqueInputObjectSchema } from './merchandiseWhereUniqueInput.schema';
import { merchandiseUpdateWithoutSaleitemInputObjectSchema } from './merchandiseUpdateWithoutSaleitemInput.schema';
import { merchandiseUncheckedUpdateWithoutSaleitemInputObjectSchema } from './merchandiseUncheckedUpdateWithoutSaleitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseUpdateOneRequiredWithoutSaleitemNestedInput> =
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
        upsert: z
          .lazy(() => merchandiseUpsertWithoutSaleitemInputObjectSchema)
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
    z
      .object({
        update: z
          .union([
            z.lazy(() => merchandiseUpdateWithoutSaleitemInputObjectSchema),
            z.lazy(
              () => merchandiseUncheckedUpdateWithoutSaleitemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const merchandiseUpdateOneRequiredWithoutSaleitemNestedInputObjectSchema =
  Schema;
