import { z } from 'zod';
import { animalCreateWithoutBreedInputObjectSchema } from './animalCreateWithoutBreedInput.schema';
import { animalUncheckedCreateWithoutBreedInputObjectSchema } from './animalUncheckedCreateWithoutBreedInput.schema';
import { animalCreateOrConnectWithoutBreedInputObjectSchema } from './animalCreateOrConnectWithoutBreedInput.schema';
import { animalUpsertWithWhereUniqueWithoutBreedInputObjectSchema } from './animalUpsertWithWhereUniqueWithoutBreedInput.schema';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';
import { animalUpdateWithWhereUniqueWithoutBreedInputObjectSchema } from './animalUpdateWithWhereUniqueWithoutBreedInput.schema';
import { animalUpdateManyWithWhereWithoutBreedInputObjectSchema } from './animalUpdateManyWithWhereWithoutBreedInput.schema';
import { animalScalarWhereInputObjectSchema } from './animalScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUncheckedUpdateManyWithoutBreedNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => animalCreateWithoutBreedInputObjectSchema),
            z.lazy(() => animalCreateWithoutBreedInputObjectSchema).array(),
            z.lazy(() => animalUncheckedCreateWithoutBreedInputObjectSchema),
            z
              .lazy(() => animalUncheckedCreateWithoutBreedInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => animalCreateOrConnectWithoutBreedInputObjectSchema),
            z
              .lazy(() => animalCreateOrConnectWithoutBreedInputObjectSchema)
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
              () => animalUpsertWithWhereUniqueWithoutBreedInputObjectSchema,
            ),
            z
              .lazy(
                () => animalUpsertWithWhereUniqueWithoutBreedInputObjectSchema,
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
            z.lazy(() => animalWhereUniqueInputObjectSchema),
            z.lazy(() => animalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => animalWhereUniqueInputObjectSchema),
            z.lazy(() => animalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => animalWhereUniqueInputObjectSchema),
            z.lazy(() => animalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => animalWhereUniqueInputObjectSchema),
            z.lazy(() => animalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => animalUpdateWithWhereUniqueWithoutBreedInputObjectSchema,
            ),
            z
              .lazy(
                () => animalUpdateWithWhereUniqueWithoutBreedInputObjectSchema,
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
              () => animalUpdateManyWithWhereWithoutBreedInputObjectSchema,
            ),
            z
              .lazy(
                () => animalUpdateManyWithWhereWithoutBreedInputObjectSchema,
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
            z.lazy(() => animalScalarWhereInputObjectSchema),
            z.lazy(() => animalScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const animalUncheckedUpdateManyWithoutBreedNestedInputObjectSchema =
  Schema;
