import { z } from 'zod';
import { MerchandiseOrderCreateWithoutSupplierInputObjectSchema } from './MerchandiseOrderCreateWithoutSupplierInput.schema';
import { MerchandiseOrderUncheckedCreateWithoutSupplierInputObjectSchema } from './MerchandiseOrderUncheckedCreateWithoutSupplierInput.schema';
import { MerchandiseOrderCreateOrConnectWithoutSupplierInputObjectSchema } from './MerchandiseOrderCreateOrConnectWithoutSupplierInput.schema';
import { MerchandiseOrderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema } from './MerchandiseOrderUpsertWithWhereUniqueWithoutSupplierInput.schema';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';
import { MerchandiseOrderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema } from './MerchandiseOrderUpdateWithWhereUniqueWithoutSupplierInput.schema';
import { MerchandiseOrderUpdateManyWithWhereWithoutSupplierInputObjectSchema } from './MerchandiseOrderUpdateManyWithWhereWithoutSupplierInput.schema';
import { MerchandiseOrderScalarWhereInputObjectSchema } from './MerchandiseOrderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUncheckedUpdateManyWithoutSupplierNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => MerchandiseOrderCreateWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () => MerchandiseOrderCreateWithoutSupplierInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                MerchandiseOrderUncheckedCreateWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderUncheckedCreateWithoutSupplierInputObjectSchema,
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
                MerchandiseOrderCreateOrConnectWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderCreateOrConnectWithoutSupplierInputObjectSchema,
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
                MerchandiseOrderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema,
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
            z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
            z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
            z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
            z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema),
            z.lazy(() => MerchandiseOrderWhereUniqueInputObjectSchema).array(),
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
                MerchandiseOrderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema,
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
                MerchandiseOrderUpdateManyWithWhereWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderUpdateManyWithWhereWithoutSupplierInputObjectSchema,
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
            z.lazy(() => MerchandiseOrderScalarWhereInputObjectSchema),
            z.lazy(() => MerchandiseOrderScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MerchandiseOrderUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema =
  Schema;
