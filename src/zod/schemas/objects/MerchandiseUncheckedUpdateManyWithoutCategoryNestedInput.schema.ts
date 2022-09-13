import { z } from 'zod';
import { MerchandiseCreateWithoutCategoryInputObjectSchema } from './MerchandiseCreateWithoutCategoryInput.schema';
import { MerchandiseUncheckedCreateWithoutCategoryInputObjectSchema } from './MerchandiseUncheckedCreateWithoutCategoryInput.schema';
import { MerchandiseCreateOrConnectWithoutCategoryInputObjectSchema } from './MerchandiseCreateOrConnectWithoutCategoryInput.schema';
import { MerchandiseUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './MerchandiseUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { MerchandiseWhereUniqueInputObjectSchema } from './MerchandiseWhereUniqueInput.schema';
import { MerchandiseUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './MerchandiseUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { MerchandiseUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './MerchandiseUpdateManyWithWhereWithoutCategoryInput.schema';
import { MerchandiseScalarWhereInputObjectSchema } from './MerchandiseScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MerchandiseUncheckedUpdateManyWithoutCategoryNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => MerchandiseCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => MerchandiseCreateWithoutCategoryInputObjectSchema)
              .array(),
            z.lazy(
              () => MerchandiseUncheckedCreateWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseUncheckedCreateWithoutCategoryInputObjectSchema,
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
              () => MerchandiseCreateOrConnectWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseCreateOrConnectWithoutCategoryInputObjectSchema,
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
                MerchandiseUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
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
            z.lazy(() => MerchandiseWhereUniqueInputObjectSchema),
            z.lazy(() => MerchandiseWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => MerchandiseWhereUniqueInputObjectSchema),
            z.lazy(() => MerchandiseWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => MerchandiseWhereUniqueInputObjectSchema),
            z.lazy(() => MerchandiseWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => MerchandiseWhereUniqueInputObjectSchema),
            z.lazy(() => MerchandiseWhereUniqueInputObjectSchema).array(),
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
                MerchandiseUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
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
                MerchandiseUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  MerchandiseUpdateManyWithWhereWithoutCategoryInputObjectSchema,
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
            z.lazy(() => MerchandiseScalarWhereInputObjectSchema),
            z.lazy(() => MerchandiseScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const MerchandiseUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema =
  Schema;
