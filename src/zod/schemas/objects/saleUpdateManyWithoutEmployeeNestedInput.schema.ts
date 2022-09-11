import { z } from 'zod';
import { saleCreateWithoutEmployeeInputObjectSchema } from './saleCreateWithoutEmployeeInput.schema';
import { saleUncheckedCreateWithoutEmployeeInputObjectSchema } from './saleUncheckedCreateWithoutEmployeeInput.schema';
import { saleCreateOrConnectWithoutEmployeeInputObjectSchema } from './saleCreateOrConnectWithoutEmployeeInput.schema';
import { saleUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema } from './saleUpsertWithWhereUniqueWithoutEmployeeInput.schema';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';
import { saleUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema } from './saleUpdateWithWhereUniqueWithoutEmployeeInput.schema';
import { saleUpdateManyWithWhereWithoutEmployeeInputObjectSchema } from './saleUpdateManyWithWhereWithoutEmployeeInput.schema';
import { saleScalarWhereInputObjectSchema } from './saleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUpdateManyWithoutEmployeeNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleCreateWithoutEmployeeInputObjectSchema),
            z.lazy(() => saleCreateWithoutEmployeeInputObjectSchema).array(),
            z.lazy(() => saleUncheckedCreateWithoutEmployeeInputObjectSchema),
            z
              .lazy(() => saleUncheckedCreateWithoutEmployeeInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => saleCreateOrConnectWithoutEmployeeInputObjectSchema),
            z
              .lazy(() => saleCreateOrConnectWithoutEmployeeInputObjectSchema)
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
              () => saleUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () => saleUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema,
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
            z.lazy(() => saleWhereUniqueInputObjectSchema),
            z.lazy(() => saleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => saleWhereUniqueInputObjectSchema),
            z.lazy(() => saleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => saleWhereUniqueInputObjectSchema),
            z.lazy(() => saleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => saleWhereUniqueInputObjectSchema),
            z.lazy(() => saleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => saleUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () => saleUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema,
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
              () => saleUpdateManyWithWhereWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () => saleUpdateManyWithWhereWithoutEmployeeInputObjectSchema,
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
            z.lazy(() => saleScalarWhereInputObjectSchema),
            z.lazy(() => saleScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const saleUpdateManyWithoutEmployeeNestedInputObjectSchema = Schema;
