import { z } from 'zod';
import { merchandiseorderCreateWithoutSupplierInputObjectSchema } from './merchandiseorderCreateWithoutSupplierInput.schema';
import { merchandiseorderUncheckedCreateWithoutSupplierInputObjectSchema } from './merchandiseorderUncheckedCreateWithoutSupplierInput.schema';
import { merchandiseorderCreateOrConnectWithoutSupplierInputObjectSchema } from './merchandiseorderCreateOrConnectWithoutSupplierInput.schema';
import { merchandiseorderWhereUniqueInputObjectSchema } from './merchandiseorderWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderUncheckedCreateNestedManyWithoutSupplierInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => merchandiseorderCreateWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () => merchandiseorderCreateWithoutSupplierInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                merchandiseorderUncheckedCreateWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderUncheckedCreateWithoutSupplierInputObjectSchema,
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
                merchandiseorderCreateOrConnectWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  merchandiseorderCreateOrConnectWithoutSupplierInputObjectSchema,
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

export const merchandiseorderUncheckedCreateNestedManyWithoutSupplierInputObjectSchema =
  Schema;
