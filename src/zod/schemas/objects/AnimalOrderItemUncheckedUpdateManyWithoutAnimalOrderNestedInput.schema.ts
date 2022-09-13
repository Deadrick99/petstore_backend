import { z } from 'zod';
import { AnimalOrderItemCreateWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemCreateWithoutAnimalOrderInput.schema';
import { AnimalOrderItemUncheckedCreateWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUncheckedCreateWithoutAnimalOrderInput.schema';
import { AnimalOrderItemCreateOrConnectWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemCreateOrConnectWithoutAnimalOrderInput.schema';
import { AnimalOrderItemUpsertWithWhereUniqueWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUpsertWithWhereUniqueWithoutAnimalOrderInput.schema';
import { AnimalOrderItemWhereUniqueInputObjectSchema } from './AnimalOrderItemWhereUniqueInput.schema';
import { AnimalOrderItemUpdateWithWhereUniqueWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUpdateWithWhereUniqueWithoutAnimalOrderInput.schema';
import { AnimalOrderItemUpdateManyWithWhereWithoutAnimalOrderInputObjectSchema } from './AnimalOrderItemUpdateManyWithWhereWithoutAnimalOrderInput.schema';
import { AnimalOrderItemScalarWhereInputObjectSchema } from './AnimalOrderItemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalOrderItemUncheckedUpdateManyWithoutAnimalOrderNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => AnimalOrderItemCreateWithoutAnimalOrderInputObjectSchema,
            ),
            z
              .lazy(
                () => AnimalOrderItemCreateWithoutAnimalOrderInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                AnimalOrderItemUncheckedCreateWithoutAnimalOrderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemUncheckedCreateWithoutAnimalOrderInputObjectSchema,
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
                AnimalOrderItemCreateOrConnectWithoutAnimalOrderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemCreateOrConnectWithoutAnimalOrderInputObjectSchema,
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
                AnimalOrderItemUpsertWithWhereUniqueWithoutAnimalOrderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemUpsertWithWhereUniqueWithoutAnimalOrderInputObjectSchema,
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
                AnimalOrderItemUpdateWithWhereUniqueWithoutAnimalOrderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemUpdateWithWhereUniqueWithoutAnimalOrderInputObjectSchema,
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
                AnimalOrderItemUpdateManyWithWhereWithoutAnimalOrderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalOrderItemUpdateManyWithWhereWithoutAnimalOrderInputObjectSchema,
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

export const AnimalOrderItemUncheckedUpdateManyWithoutAnimalOrderNestedInputObjectSchema =
  Schema;
