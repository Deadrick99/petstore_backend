import { z } from 'zod';
import { merchandiseorderCreateWithoutOrderitemInputObjectSchema } from './merchandiseorderCreateWithoutOrderitemInput.schema';
import { merchandiseorderUncheckedCreateWithoutOrderitemInputObjectSchema } from './merchandiseorderUncheckedCreateWithoutOrderitemInput.schema';
import { merchandiseorderCreateOrConnectWithoutOrderitemInputObjectSchema } from './merchandiseorderCreateOrConnectWithoutOrderitemInput.schema';
import { merchandiseorderUpsertWithoutOrderitemInputObjectSchema } from './merchandiseorderUpsertWithoutOrderitemInput.schema';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';
import { merchandiseorderUpdateWithoutOrderitemInputObjectSchema } from './merchandiseorderUpdateWithoutOrderitemInput.schema';
import { merchandiseorderUncheckedUpdateWithoutOrderitemInputObjectSchema } from './merchandiseorderUncheckedUpdateWithoutOrderitemInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUpdateOneRequiredWithoutOrderitemNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => merchandiseorderCreateWithoutOrderitemInputObjectSchema,
            ),
            z.lazy(
              () =>
                merchandiseorderUncheckedCreateWithoutOrderitemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () =>
              merchandiseorderCreateOrConnectWithoutOrderitemInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => merchandiseorderUpsertWithoutOrderitemInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .lazy(() => merchandiseorderWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => merchandiseorderUpdateWithoutOrderitemInputObjectSchema,
            ),
            z.lazy(
              () =>
                merchandiseorderUncheckedUpdateWithoutOrderitemInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const merchandiseorderUpdateOneRequiredWithoutOrderitemNestedInputObjectSchema =
  Schema;
