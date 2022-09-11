import { z } from 'zod';
import { saleitemCreateWithoutSaleInputObjectSchema } from './saleitemCreateWithoutSaleInput.schema';
import { saleitemUncheckedCreateWithoutSaleInputObjectSchema } from './saleitemUncheckedCreateWithoutSaleInput.schema';
import { saleitemCreateOrConnectWithoutSaleInputObjectSchema } from './saleitemCreateOrConnectWithoutSaleInput.schema';
import { saleitemUpsertWithWhereUniqueWithoutSaleInputObjectSchema } from './saleitemUpsertWithWhereUniqueWithoutSaleInput.schema';
import { saleitemWhereUniqueInputObjectSchema } from './saleitemWhereUniqueInput.schema';
import { saleitemUpdateWithWhereUniqueWithoutSaleInputObjectSchema } from './saleitemUpdateWithWhereUniqueWithoutSaleInput.schema';
import { saleitemUpdateManyWithWhereWithoutSaleInputObjectSchema } from './saleitemUpdateManyWithWhereWithoutSaleInput.schema';
import { saleitemScalarWhereInputObjectSchema } from './saleitemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleitemUncheckedUpdateManyWithoutSaleNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleitemCreateWithoutSaleInputObjectSchema),
            z.lazy(() => saleitemCreateWithoutSaleInputObjectSchema).array(),
            z.lazy(() => saleitemUncheckedCreateWithoutSaleInputObjectSchema),
            z
              .lazy(() => saleitemUncheckedCreateWithoutSaleInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => saleitemCreateOrConnectWithoutSaleInputObjectSchema),
            z
              .lazy(() => saleitemCreateOrConnectWithoutSaleInputObjectSchema)
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
              () => saleitemUpsertWithWhereUniqueWithoutSaleInputObjectSchema,
            ),
            z
              .lazy(
                () => saleitemUpsertWithWhereUniqueWithoutSaleInputObjectSchema,
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
              () => saleitemUpdateWithWhereUniqueWithoutSaleInputObjectSchema,
            ),
            z
              .lazy(
                () => saleitemUpdateWithWhereUniqueWithoutSaleInputObjectSchema,
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
              () => saleitemUpdateManyWithWhereWithoutSaleInputObjectSchema,
            ),
            z
              .lazy(
                () => saleitemUpdateManyWithWhereWithoutSaleInputObjectSchema,
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

export const saleitemUncheckedUpdateManyWithoutSaleNestedInputObjectSchema =
  Schema;
