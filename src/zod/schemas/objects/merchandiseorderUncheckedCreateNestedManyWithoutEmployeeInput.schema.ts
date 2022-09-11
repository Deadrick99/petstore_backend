import { z } from 'zod';
import { merchandiseorderCreateWithoutEmployeeInputObjectSchema } from './merchandiseorderCreateWithoutEmployeeInput.schema';
import { merchandiseorderUncheckedCreateWithoutEmployeeInputObjectSchema } from './merchandiseorderUncheckedCreateWithoutEmployeeInput.schema';
import { merchandiseorderCreateOrConnectWithoutEmployeeInputObjectSchema } from './merchandiseorderCreateOrConnectWithoutEmployeeInput.schema';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUncheckedCreateNestedManyWithoutEmployeeInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => merchandiseorderCreateWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () => merchandiseorderCreateWithoutEmployeeInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                merchandiseorderUncheckedCreateWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderUncheckedCreateWithoutEmployeeInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(
              () =>
                merchandiseorderCreateOrConnectWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderCreateOrConnectWithoutEmployeeInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema),
            z.lazy(() => merchandiseorderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const merchandiseorderUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema =
  Schema;
