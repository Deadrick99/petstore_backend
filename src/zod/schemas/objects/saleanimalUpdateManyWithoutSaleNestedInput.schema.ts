import { z } from 'zod';
import { saleanimalCreateWithoutSaleInputObjectSchema } from './saleanimalCreateWithoutSaleInput.schema';
import { saleanimalUncheckedCreateWithoutSaleInputObjectSchema } from './saleanimalUncheckedCreateWithoutSaleInput.schema';
import { saleanimalCreateOrConnectWithoutSaleInputObjectSchema } from './saleanimalCreateOrConnectWithoutSaleInput.schema';
import { saleanimalUpsertWithWhereUniqueWithoutSaleInputObjectSchema } from './saleanimalUpsertWithWhereUniqueWithoutSaleInput.schema';
import { saleanimalWhereUniqueInputObjectSchema } from './saleanimalWhereUniqueInput.schema';
import { saleanimalUpdateWithWhereUniqueWithoutSaleInputObjectSchema } from './saleanimalUpdateWithWhereUniqueWithoutSaleInput.schema';
import { saleanimalUpdateManyWithWhereWithoutSaleInputObjectSchema } from './saleanimalUpdateManyWithWhereWithoutSaleInput.schema';
import { saleanimalScalarWhereInputObjectSchema } from './saleanimalScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalUpdateManyWithoutSaleNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleanimalCreateWithoutSaleInputObjectSchema),
            z.lazy(() => saleanimalCreateWithoutSaleInputObjectSchema).array(),
            z.lazy(() => saleanimalUncheckedCreateWithoutSaleInputObjectSchema),
            z
              .lazy(() => saleanimalUncheckedCreateWithoutSaleInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => saleanimalCreateOrConnectWithoutSaleInputObjectSchema),
            z
              .lazy(() => saleanimalCreateOrConnectWithoutSaleInputObjectSchema)
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
              () => saleanimalUpsertWithWhereUniqueWithoutSaleInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  saleanimalUpsertWithWhereUniqueWithoutSaleInputObjectSchema,
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
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => saleanimalUpdateWithWhereUniqueWithoutSaleInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  saleanimalUpdateWithWhereUniqueWithoutSaleInputObjectSchema,
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
              () => saleanimalUpdateManyWithWhereWithoutSaleInputObjectSchema,
            ),
            z
              .lazy(
                () => saleanimalUpdateManyWithWhereWithoutSaleInputObjectSchema,
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
            z.lazy(() => saleanimalScalarWhereInputObjectSchema),
            z.lazy(() => saleanimalScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const saleanimalUpdateManyWithoutSaleNestedInputObjectSchema = Schema;
