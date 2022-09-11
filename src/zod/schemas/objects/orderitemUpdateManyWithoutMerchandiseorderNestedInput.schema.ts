import { z } from 'zod';
import { orderitemCreateWithoutMerchandiseorderInputObjectSchema } from './orderitemCreateWithoutMerchandiseorderInput.schema';
import { orderitemUncheckedCreateWithoutMerchandiseorderInputObjectSchema } from './orderitemUncheckedCreateWithoutMerchandiseorderInput.schema';
import { orderitemCreateOrConnectWithoutMerchandiseorderInputObjectSchema } from './orderitemCreateOrConnectWithoutMerchandiseorderInput.schema';
import { orderitemUpsertWithWhereUniqueWithoutMerchandiseorderInputObjectSchema } from './orderitemUpsertWithWhereUniqueWithoutMerchandiseorderInput.schema';
import { orderitemWhereUniqueInputObjectSchema } from './orderitemWhereUniqueInput.schema';
import { orderitemUpdateWithWhereUniqueWithoutMerchandiseorderInputObjectSchema } from './orderitemUpdateWithWhereUniqueWithoutMerchandiseorderInput.schema';
import { orderitemUpdateManyWithWhereWithoutMerchandiseorderInputObjectSchema } from './orderitemUpdateManyWithWhereWithoutMerchandiseorderInput.schema';
import { orderitemScalarWhereInputObjectSchema } from './orderitemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.orderitemUpdateManyWithoutMerchandiseorderNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => orderitemCreateWithoutMerchandiseorderInputObjectSchema,
            ),
            z
              .lazy(
                () => orderitemCreateWithoutMerchandiseorderInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                orderitemUncheckedCreateWithoutMerchandiseorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemUncheckedCreateWithoutMerchandiseorderInputObjectSchema,
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
                orderitemCreateOrConnectWithoutMerchandiseorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemCreateOrConnectWithoutMerchandiseorderInputObjectSchema,
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
                orderitemUpsertWithWhereUniqueWithoutMerchandiseorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemUpsertWithWhereUniqueWithoutMerchandiseorderInputObjectSchema,
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
            z.lazy(() => orderitemWhereUniqueInputObjectSchema),
            z.lazy(() => orderitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => orderitemWhereUniqueInputObjectSchema),
            z.lazy(() => orderitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => orderitemWhereUniqueInputObjectSchema),
            z.lazy(() => orderitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => orderitemWhereUniqueInputObjectSchema),
            z.lazy(() => orderitemWhereUniqueInputObjectSchema).array(),
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
                orderitemUpdateWithWhereUniqueWithoutMerchandiseorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemUpdateWithWhereUniqueWithoutMerchandiseorderInputObjectSchema,
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
                orderitemUpdateManyWithWhereWithoutMerchandiseorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  orderitemUpdateManyWithWhereWithoutMerchandiseorderInputObjectSchema,
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
            z.lazy(() => orderitemScalarWhereInputObjectSchema),
            z.lazy(() => orderitemScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const orderitemUpdateManyWithoutMerchandiseorderNestedInputObjectSchema =
  Schema;
