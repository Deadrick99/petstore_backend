import { z } from 'zod';
import { AnimalOrderCreateWithoutEmployeeInputObjectSchema } from './AnimalOrderCreateWithoutEmployeeInput.schema';
import { AnimalOrderUncheckedCreateWithoutEmployeeInputObjectSchema } from './AnimalOrderUncheckedCreateWithoutEmployeeInput.schema';
import { AnimalOrderCreateOrConnectWithoutEmployeeInputObjectSchema } from './AnimalOrderCreateOrConnectWithoutEmployeeInput.schema';
import { AnimalOrderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema } from './AnimalOrderUpsertWithWhereUniqueWithoutEmployeeInput.schema';
import { AnimalOrderWhereUniqueInputObjectSchema } from './AnimalOrderWhereUniqueInput.schema';
import { AnimalOrderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema } from './AnimalOrderUpdateWithWhereUniqueWithoutEmployeeInput.schema';
import { AnimalOrderUpdateManyWithWhereWithoutEmployeeInputObjectSchema } from './AnimalOrderUpdateManyWithWhereWithoutEmployeeInput.schema';
import { AnimalOrderScalarWhereInputObjectSchema } from './AnimalOrderScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderUncheckedUpdateManyWithoutEmployeeNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => AnimalOrderCreateWithoutEmployeeInputObjectSchema),
            z
              .lazy(() => AnimalOrderCreateWithoutEmployeeInputObjectSchema)
              .array(),
            z.lazy(
              () => AnimalOrderUncheckedCreateWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderUncheckedCreateWithoutEmployeeInputObjectSchema,
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
              () => AnimalOrderCreateOrConnectWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderCreateOrConnectWithoutEmployeeInputObjectSchema,
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
                AnimalOrderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderUpsertWithWhereUniqueWithoutEmployeeInputObjectSchema,
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
                AnimalOrderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderUpdateWithWhereUniqueWithoutEmployeeInputObjectSchema,
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
                AnimalOrderUpdateManyWithWhereWithoutEmployeeInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderUpdateManyWithWhereWithoutEmployeeInputObjectSchema,
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

export const AnimalOrderUncheckedUpdateManyWithoutEmployeeNestedInputObjectSchema =
  Schema;
