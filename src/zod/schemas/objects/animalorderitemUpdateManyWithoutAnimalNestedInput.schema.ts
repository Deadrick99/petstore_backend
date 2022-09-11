import { z } from 'zod';
import { animalorderitemCreateWithoutAnimalInputObjectSchema } from './animalorderitemCreateWithoutAnimalInput.schema';
import { animalorderitemUncheckedCreateWithoutAnimalInputObjectSchema } from './animalorderitemUncheckedCreateWithoutAnimalInput.schema';
import { animalorderitemCreateOrConnectWithoutAnimalInputObjectSchema } from './animalorderitemCreateOrConnectWithoutAnimalInput.schema';
import { animalorderitemUpsertWithWhereUniqueWithoutAnimalInputObjectSchema } from './animalorderitemUpsertWithWhereUniqueWithoutAnimalInput.schema';
import { animalorderitemWhereUniqueInputObjectSchema } from './animalorderitemWhereUniqueInput.schema';
import { animalorderitemUpdateWithWhereUniqueWithoutAnimalInputObjectSchema } from './animalorderitemUpdateWithWhereUniqueWithoutAnimalInput.schema';
import { animalorderitemUpdateManyWithWhereWithoutAnimalInputObjectSchema } from './animalorderitemUpdateManyWithWhereWithoutAnimalInput.schema';
import { animalorderitemScalarWhereInputObjectSchema } from './animalorderitemScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderitemUpdateManyWithoutAnimalNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => animalorderitemCreateWithoutAnimalInputObjectSchema),
            z
              .lazy(() => animalorderitemCreateWithoutAnimalInputObjectSchema)
              .array(),
            z.lazy(
              () =>
                animalorderitemUncheckedCreateWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemUncheckedCreateWithoutAnimalInputObjectSchema,
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
                animalorderitemCreateOrConnectWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemCreateOrConnectWithoutAnimalInputObjectSchema,
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
                animalorderitemUpsertWithWhereUniqueWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemUpsertWithWhereUniqueWithoutAnimalInputObjectSchema,
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
                animalorderitemUpdateWithWhereUniqueWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemUpdateWithWhereUniqueWithoutAnimalInputObjectSchema,
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
                animalorderitemUpdateManyWithWhereWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalorderitemUpdateManyWithWhereWithoutAnimalInputObjectSchema,
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

export const animalorderitemUpdateManyWithoutAnimalNestedInputObjectSchema =
  Schema;
