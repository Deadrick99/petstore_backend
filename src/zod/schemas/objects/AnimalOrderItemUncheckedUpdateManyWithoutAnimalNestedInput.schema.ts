import { z } from 'zod';
import { AnimalOrderItemCreateWithoutAnimalInputObjectSchema } from './AnimalOrderItemCreateWithoutAnimalInput.schema';
import { AnimalOrderItemUncheckedCreateWithoutAnimalInputObjectSchema } from './AnimalOrderItemUncheckedCreateWithoutAnimalInput.schema';
import { AnimalOrderItemCreateOrConnectWithoutAnimalInputObjectSchema } from './AnimalOrderItemCreateOrConnectWithoutAnimalInput.schema';
import { AnimalOrderItemUpsertWithWhereUniqueWithoutAnimalInputObjectSchema } from './AnimalOrderItemUpsertWithWhereUniqueWithoutAnimalInput.schema';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './AnimalOrderItemWhereUniqueInput.schema';
import { AnimalOrderItemUpdateWithWhereUniqueWithoutAnimalInputObjectSchema } from './AnimalOrderItemUpdateWithWhereUniqueWithoutAnimalInput.schema';
import { AnimalOrderItemUpdateManyWithWhereWithoutAnimalInputObjectSchema } from './AnimalOrderItemUpdateManyWithWhereWithoutAnimalInput.schema';
import { AnimalOrderItemScalarWhereInputObjectSchema } from './AnimalOrderItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUncheckedUpdateManyWithoutAnimalNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => AnimalOrderItemCreateWithoutAnimalInputObjectSchema),
            z
              .lazy(() => AnimalOrderItemCreateWithoutAnimalInputObjectSchema)
              .array(),
            z.lazy(
              () =>
                AnimalOrderItemUncheckedCreateWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemUncheckedCreateWithoutAnimalInputObjectSchema,
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
                AnimalOrderItemCreateOrConnectWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemCreateOrConnectWithoutAnimalInputObjectSchema,
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
                AnimalOrderItemUpsertWithWhereUniqueWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemUpsertWithWhereUniqueWithoutAnimalInputObjectSchema,
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
            z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalOrderItemWhereUniqueInputObjectSchema).array(),
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
                AnimalOrderItemUpdateWithWhereUniqueWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemUpdateWithWhereUniqueWithoutAnimalInputObjectSchema,
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
                AnimalOrderItemUpdateManyWithWhereWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemUpdateManyWithWhereWithoutAnimalInputObjectSchema,
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
            z.lazy(() => AnimalOrderItemScalarWhereInputObjectSchema),
            z.lazy(() => AnimalOrderItemScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const AnimalOrderItemUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema =
  Schema;
