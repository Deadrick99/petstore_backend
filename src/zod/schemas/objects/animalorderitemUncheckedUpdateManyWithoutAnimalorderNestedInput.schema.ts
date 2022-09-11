import { z } from 'zod';
import { animalorderitemCreateWithoutAnimalorderInputObjectSchema } from './animalorderitemCreateWithoutAnimalorderInput.schema';
import { animalorderitemUncheckedCreateWithoutAnimalorderInputObjectSchema } from './animalorderitemUncheckedCreateWithoutAnimalorderInput.schema';
import { animalorderitemCreateOrConnectWithoutAnimalorderInputObjectSchema } from './animalorderitemCreateOrConnectWithoutAnimalorderInput.schema';
import { animalorderitemUpsertWithWhereUniqueWithoutAnimalorderInputObjectSchema } from './animalorderitemUpsertWithWhereUniqueWithoutAnimalorderInput.schema';
import { animalorderitemWhereUniqueInputObjectSchema } from './animalorderitemWhereUniqueInput.schema';
import { animalorderitemUpdateWithWhereUniqueWithoutAnimalorderInputObjectSchema } from './animalorderitemUpdateWithWhereUniqueWithoutAnimalorderInput.schema';
import { animalorderitemUpdateManyWithWhereWithoutAnimalorderInputObjectSchema } from './animalorderitemUpdateManyWithWhereWithoutAnimalorderInput.schema';
import { animalorderitemScalarWhereInputObjectSchema } from './animalorderitemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemUncheckedUpdateManyWithoutAnimalorderNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(
              () => animalorderitemCreateWithoutAnimalorderInputObjectSchema,
            ),
            z
              .lazy(
                () => animalorderitemCreateWithoutAnimalorderInputObjectSchema,
              )
              .array(),
            z.lazy(
              () =>
                animalorderitemUncheckedCreateWithoutAnimalorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemUncheckedCreateWithoutAnimalorderInputObjectSchema,
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
                animalorderitemCreateOrConnectWithoutAnimalorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemCreateOrConnectWithoutAnimalorderInputObjectSchema,
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
                animalorderitemUpsertWithWhereUniqueWithoutAnimalorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemUpsertWithWhereUniqueWithoutAnimalorderInputObjectSchema,
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
            z.lazy(() => animalorderitemWhereUniqueInputObjectSchema),
            z.lazy(() => animalorderitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => animalorderitemWhereUniqueInputObjectSchema),
            z.lazy(() => animalorderitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => animalorderitemWhereUniqueInputObjectSchema),
            z.lazy(() => animalorderitemWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => animalorderitemWhereUniqueInputObjectSchema),
            z.lazy(() => animalorderitemWhereUniqueInputObjectSchema).array(),
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
                animalorderitemUpdateWithWhereUniqueWithoutAnimalorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemUpdateWithWhereUniqueWithoutAnimalorderInputObjectSchema,
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
                animalorderitemUpdateManyWithWhereWithoutAnimalorderInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemUpdateManyWithWhereWithoutAnimalorderInputObjectSchema,
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
            z.lazy(() => animalorderitemScalarWhereInputObjectSchema),
            z.lazy(() => animalorderitemScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const animalorderitemUncheckedUpdateManyWithoutAnimalorderNestedInputObjectSchema =
  Schema;
