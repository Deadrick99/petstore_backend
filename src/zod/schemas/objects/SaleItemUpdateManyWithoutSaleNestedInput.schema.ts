import { z } from 'zod';
import { SaleItemCreateWithoutSaleInputObjectSchema } from './SaleItemCreateWithoutSaleInput.schema';
import { SaleItemUncheckedCreateWithoutSaleInputObjectSchema } from './SaleItemUncheckedCreateWithoutSaleInput.schema';
import { SaleItemCreateOrConnectWithoutSaleInputObjectSchema } from './SaleItemCreateOrConnectWithoutSaleInput.schema';
import { SaleItemUpsertWithWhereUniqueWithoutSaleInputObjectSchema } from './SaleItemUpsertWithWhereUniqueWithoutSaleInput.schema';
import { SaleItemWhereUniqueInputObjectSchema } from './SaleItemWhereUniqueInput.schema';
import { SaleItemUpdateWithWhereUniqueWithoutSaleInputObjectSchema } from './SaleItemUpdateWithWhereUniqueWithoutSaleInput.schema';
import { SaleItemUpdateManyWithWhereWithoutSaleInputObjectSchema } from './SaleItemUpdateManyWithWhereWithoutSaleInput.schema';
import { SaleItemScalarWhereInputObjectSchema } from './SaleItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleItemUpdateManyWithoutSaleNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleItemCreateWithoutSaleInputObjectSchema),
            z.lazy(() => SaleItemCreateWithoutSaleInputObjectSchema).array(),
            z.lazy(() => SaleItemUncheckedCreateWithoutSaleInputObjectSchema),
            z
              .lazy(() => SaleItemUncheckedCreateWithoutSaleInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => SaleItemCreateOrConnectWithoutSaleInputObjectSchema),
            z
              .lazy(() => SaleItemCreateOrConnectWithoutSaleInputObjectSchema)
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
              () => SaleItemUpsertWithWhereUniqueWithoutSaleInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleItemUpsertWithWhereUniqueWithoutSaleInputObjectSchema,
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
              () => SaleItemUpdateWithWhereUniqueWithoutSaleInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleItemUpdateWithWhereUniqueWithoutSaleInputObjectSchema,
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
              () => SaleItemUpdateManyWithWhereWithoutSaleInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleItemUpdateManyWithWhereWithoutSaleInputObjectSchema,
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

export const SaleItemUpdateManyWithoutSaleNestedInputObjectSchema = Schema;
