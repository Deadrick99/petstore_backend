import { z } from 'zod';
import { SaleItemCreateWithoutMerchandiseInputObjectSchema } from './SaleItemCreateWithoutMerchandiseInput.schema';
import { SaleItemUncheckedCreateWithoutMerchandiseInputObjectSchema } from './SaleItemUncheckedCreateWithoutMerchandiseInput.schema';
import { SaleItemCreateOrConnectWithoutMerchandiseInputObjectSchema } from './SaleItemCreateOrConnectWithoutMerchandiseInput.schema';
import { SaleItemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema } from './SaleItemUpsertWithWhereUniqueWithoutMerchandiseInput.schema';
import { SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema } from './SaleItemUpdateWithWhereUniqueWithoutMerchandiseInput.schema';
import { SaleItemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema } from './SaleItemUpdateManyWithWhereWithoutMerchandiseInput.schema';
import { SaleItemScalarWhereInputObjectSchema } from './SaleItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUncheckedUpdateManyWithoutMerchandiseNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleItemCreateWithoutMerchandiseInputObjectSchema),
            z
              .lazy(() => SaleItemCreateWithoutMerchandiseInputObjectSchema)
              .array(),
            z.lazy(
              () => SaleItemUncheckedCreateWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  SaleItemUncheckedCreateWithoutMerchandiseInputObjectSchema,
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
              () => SaleItemCreateOrConnectWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  SaleItemCreateOrConnectWithoutMerchandiseInputObjectSchema,
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
                SaleItemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  SaleItemUpsertWithWhereUniqueWithoutMerchandiseInputObjectSchema,
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
            z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
            z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
            z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
            z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => SaleItemWhereUniqueInputObjectSchema),
            z.lazy(() => SaleItemWhereUniqueInputObjectSchema).array(),
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
                SaleItemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  SaleItemUpdateWithWhereUniqueWithoutMerchandiseInputObjectSchema,
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
                SaleItemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  SaleItemUpdateManyWithWhereWithoutMerchandiseInputObjectSchema,
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
            z.lazy(() => SaleItemScalarWhereInputObjectSchema),
            z.lazy(() => SaleItemScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SaleItemUncheckedUpdateManyWithoutMerchandiseNestedInputObjectSchema =
  Schema;
