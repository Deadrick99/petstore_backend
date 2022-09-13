import { z } from 'zod';
import { AnimalOrderCreateWithoutSupplierInputObjectSchema } from './AnimalOrderCreateWithoutSupplierInput.schema';
import { AnimalOrderUncheckedCreateWithoutSupplierInputObjectSchema } from './AnimalOrderUncheckedCreateWithoutSupplierInput.schema';
import { AnimalOrderCreateOrConnectWithoutSupplierInputObjectSchema } from './AnimalOrderCreateOrConnectWithoutSupplierInput.schema';
import { AnimalOrderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema } from './AnimalOrderUpsertWithWhereUniqueWithoutSupplierInput.schema';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';
import { AnimalOrderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema } from './AnimalOrderUpdateWithWhereUniqueWithoutSupplierInput.schema';
import { AnimalOrderUpdateManyWithWhereWithoutSupplierInputObjectSchema } from './AnimalOrderUpdateManyWithWhereWithoutSupplierInput.schema';
import { AnimalOrderScalarWhereInputObjectSchema } from './AnimalOrderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUpdateManyWithoutSupplierNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => AnimalOrderCreateWithoutSupplierInputObjectSchema),
            z
              .lazy(() => AnimalOrderCreateWithoutSupplierInputObjectSchema)
              .array(),
            z.lazy(
              () => AnimalOrderUncheckedCreateWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderUncheckedCreateWithoutSupplierInputObjectSchema,
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
              () => AnimalOrderCreateOrConnectWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderCreateOrConnectWithoutSupplierInputObjectSchema,
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
                AnimalOrderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema,
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
            z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalOrderWhereUniqueInputObjectSchema).array(),
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
                AnimalOrderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema,
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
                AnimalOrderUpdateManyWithWhereWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderUpdateManyWithWhereWithoutSupplierInputObjectSchema,
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
            z.lazy(() => AnimalOrderScalarWhereInputObjectSchema),
            z.lazy(() => AnimalOrderScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const AnimalOrderUpdateManyWithoutSupplierNestedInputObjectSchema =
  Schema;
