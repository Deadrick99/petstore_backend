import { z } from 'zod';
import { animalorderCreateWithoutSupplierInputObjectSchema } from './animalorderCreateWithoutSupplierInput.schema';
import { animalorderUncheckedCreateWithoutSupplierInputObjectSchema } from './animalorderUncheckedCreateWithoutSupplierInput.schema';
import { animalorderCreateOrConnectWithoutSupplierInputObjectSchema } from './animalorderCreateOrConnectWithoutSupplierInput.schema';
import { animalorderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema } from './animalorderUpsertWithWhereUniqueWithoutSupplierInput.schema';
import { animalorderWhereUniqueInputObjectSchema } from './animalorderWhereUniqueInput.schema';
import { animalorderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema } from './animalorderUpdateWithWhereUniqueWithoutSupplierInput.schema';
import { animalorderUpdateManyWithWhereWithoutSupplierInputObjectSchema } from './animalorderUpdateManyWithWhereWithoutSupplierInput.schema';
import { animalorderScalarWhereInputObjectSchema } from './animalorderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderUncheckedUpdateManyWithoutSupplierNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => animalorderCreateWithoutSupplierInputObjectSchema),
            z
              .lazy(() => animalorderCreateWithoutSupplierInputObjectSchema)
              .array(),
            z.lazy(
              () => animalorderUncheckedCreateWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderUncheckedCreateWithoutSupplierInputObjectSchema,
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
              () => animalorderCreateOrConnectWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderCreateOrConnectWithoutSupplierInputObjectSchema,
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
                animalorderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderUpsertWithWhereUniqueWithoutSupplierInputObjectSchema,
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
            z.lazy(() => animalorderWhereUniqueInputObjectSchema),
            z.lazy(() => animalorderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => animalorderWhereUniqueInputObjectSchema),
            z.lazy(() => animalorderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => animalorderWhereUniqueInputObjectSchema),
            z.lazy(() => animalorderWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => animalorderWhereUniqueInputObjectSchema),
            z.lazy(() => animalorderWhereUniqueInputObjectSchema).array(),
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
                animalorderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderUpdateWithWhereUniqueWithoutSupplierInputObjectSchema,
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
                animalorderUpdateManyWithWhereWithoutSupplierInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderUpdateManyWithWhereWithoutSupplierInputObjectSchema,
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
            z.lazy(() => animalorderScalarWhereInputObjectSchema),
            z.lazy(() => animalorderScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const animalorderUncheckedUpdateManyWithoutSupplierNestedInputObjectSchema =
  Schema;
