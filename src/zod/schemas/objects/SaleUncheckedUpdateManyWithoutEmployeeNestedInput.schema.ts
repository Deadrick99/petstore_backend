import { z } from 'zod';
import { SaleCreateWithoutEmployeeInputObjectSchema } from './SaleCreateWithoutEmployeeInput.schema';
import { SaleUncheckedCreateWithoutEmployeeInputObjectSchema } from './SaleUncheckedCreateWithoutEmployeeInput.schema';
import { SaleCreateOrConnectWithoutEmployeeInputObjectSchema } from './SaleCreateOrConnectWithoutEmployeeInput.schema';
import { SaleUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema } from './SaleUpsertWithWhereUniqueWithoutEmployeeInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema } from './SaleUpdateWithWhereUniqueWithoutEmployeeInput.schema';
import { SaleUpdateManyWithWhereWithoutEmployeeInputObjectSchema } from './SaleUpdateManyWithWhereWithoutEmployeeInput.schema';
import { SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUncheckedUpdateManyWithoutEmployeeNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleCreateWithoutEmployeeInputObjectSchema),
            z.lazy(() => SaleCreateWithoutEmployeeInputObjectSchema).array(),
            z.lazy(() => SaleUncheckedCreateWithoutEmployeeInputObjectSchema),
            z
              .lazy(() => SaleUncheckedCreateWithoutEmployeeInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => SaleCreateOrConnectWithoutEmployeeInputObjectSchema),
            z
              .lazy(() => SaleCreateOrConnectWithoutEmployeeInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .union([
            z.lazy(
              () => SaleUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        set: z
          .union([
            z.lazy(() => SaleWhereUniqueInputObjectSchema),
            z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => SaleWhereUniqueInputObjectSchema),
            z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => SaleWhereUniqueInputObjectSchema),
            z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => SaleWhereUniqueInputObjectSchema),
            z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => SaleUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        updateMany: z
          .union([
            z.lazy(
              () => SaleUpdateManyWithWhereWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleUpdateManyWithWhereWithoutEmployeeInputObjectSchema,
              )
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        deleteMany: z
          .union([
            z.lazy(() => SaleScalarWhereInputObjectSchema),
            z.lazy(() => SaleScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SaleUncheckedUpdateManyWithoutEmployeeNestedInputObjectSchema =
  Schema;
