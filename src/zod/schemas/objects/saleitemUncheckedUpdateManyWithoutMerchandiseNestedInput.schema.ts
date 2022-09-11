import { z } from 'zod';
import { saleitemCreateWithoutMerchandiseInputObjectSchema } from './saleitemCreateWithoutMerchandiseInput.schema';
import { saleitemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './saleitemUncheckedCreateWithoutMerchandiseInput.schema';
import { saleitemCreateOrConnectWithoutMerchandiseInputObjectSchema } from './saleitemCreateOrConnectWithoutMerchandiseInput.schema';
import { saleitemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema } from './saleitemUpsertWithWhereUniqueWithoutMerchandiseInput.schema';
import { saleitemWhereUniqueInputObjectSchema } from './saleitemWhereUniqueInput.schema';
import { saleitemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema } from './saleitemUpdateWithWhereUniqueWithoutMerchandiseInput.schema';
import { saleitemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema } from './saleitemUpdateManyWithWhereWithoutMerchandiseInput.schema';
import { saleitemScalarWhereInputObjectSchema } from './saleitemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUncheckedUpdateManyWithoutMerchandiseNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleitemCreateWithoutMerchandiseInputObjectSchema),
            z
              .lazy(() => saleitemCreateWithoutMerchandiseInputObjectSchema)
              .array(),
            z.lazy(
              () => saleitemUncheckedCreateWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  saleitemUncheckedCreateWithoutMerchandiseInputObjectSchema,
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
              () => saleitemCreateOrConnectWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  saleitemCreateOrConnectWithoutMerchandiseInputObjectSchema,
              )
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
              () =>
                saleitemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  saleitemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema,
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
            z.lazy(() => saleitemWhereUniqueInputObjectSchema),
            z.lazy(() => saleitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => saleitemWhereUniqueInputObjectSchema),
            z.lazy(() => saleitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => saleitemWhereUniqueInputObjectSchema),
            z.lazy(() => saleitemWhereUniqueInputObjectSchema).array(),
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
    z
      .object({
        update: z
          .union([
            z.lazy(
              () =>
                saleitemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  saleitemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema,
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
              () =>
                saleitemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  saleitemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema,
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
            z.lazy(() => saleitemScalarWhereInputObjectSchema),
            z.lazy(() => saleitemScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const saleitemUncheckedUpdateManyWithoutMerchandiseNestedInputObjectSchema =
  Schema;
