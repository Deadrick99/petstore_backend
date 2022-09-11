import { z } from 'zod';
import { merchandiseorderCreateWithoutOrderitemInputObjectSchema } from './merchandiseorderCreateWithoutOrderitemInput.schema';
import { merchandiseorderUncheckedCreateWithoutOrderitemInputObjectSchema } from './merchandiseorderUncheckedCreateWithoutOrderitemInput.schema';
import { merchandiseorderCreateOrConnectWithoutOrderitemInputObjectSchema } from './merchandiseorderCreateOrConnectWithoutOrderitemInput.schema';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderCreateNestedOneWithoutOrderitemInput> =
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
        connect: z
          .lazy(() => merchandiseorderWhereUniqueInputObjectSchema)
          .optional(),
      })
      .strict(),
  ]);

export const merchandiseorderCreateNestedOneWithoutOrderitemInputObjectSchema =
  Schema;
