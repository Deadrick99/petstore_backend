import { z } from 'zod';
import { MerchandiseOrderCreateWithoutEmployeeInputObjectSchema } from './MerchandiseOrderCreateWithoutEmployeeInput.schema';
import { MerchandiseOrderUncheckedCreateWithoutEmployeeInputObjectSchema } from './MerchandiseOrderUncheckedCreateWithoutEmployeeInput.schema';
import { MerchandiseOrderCreateOrConnectWithoutEmployeeInputObjectSchema } from './MerchandiseOrderCreateOrConnectWithoutEmployeeInput.schema';
import { MerchandiseOrderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema } from './MerchandiseOrderUpsertWithWhereUniqueWithoutEmployeeInput.schema';
import { MerchandiseOrderWhereUniqueInputObjectSchema } from './MerchandiseOrderWhereUniqueInput.schema';
import { MerchandiseOrderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema } from './MerchandiseOrderUpdateWithWhereUniqueWithoutEmployeeInput.schema';
import { MerchandiseOrderUpdateManyWithWhereWithoutEmployeeInputObjectSchema } from './MerchandiseOrderUpdateManyWithWhereWithoutEmployeeInput.schema';
import { MerchandiseOrderScalarWhereInputObjectSchema } from './MerchandiseOrderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseOrderUpdateManyWithoutEmployeeNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => MerchandiseOrderCreateWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () => MerchandiseOrderCreateWithoutEmployeeInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                MerchandiseOrderUncheckedCreateWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderUncheckedCreateWithoutEmployeeInputObjectSchema,
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
                MerchandiseOrderCreateOrConnectWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderCreateOrConnectWithoutEmployeeInputObjectSchema,
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
                MerchandiseOrderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema,
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
                MerchandiseOrderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema,
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
                MerchandiseOrderUpdateManyWithWhereWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseOrderUpdateManyWithWhereWithoutEmployeeInputObjectSchema,
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

export const MerchandiseOrderUpdateManyWithoutEmployeeNestedInputObjectSchema =
  Schema;
