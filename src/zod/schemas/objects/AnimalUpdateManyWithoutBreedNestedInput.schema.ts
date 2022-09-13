import { z } from 'zod';
import { AnimalCreateWithoutBreedInputObjectSchema } from './AnimalCreateWithoutBreedInput.schema';
import { AnimalUncheckedCreateWithoutBreedInputObjectSchema } from './AnimalUncheckedCreateWithoutBreedInput.schema';
import { AnimalCreateOrConnectWithoutBreedInputObjectSchema } from './AnimalCreateOrConnectWithoutBreedInput.schema';
import { AnimalUpsertWithWhereUniqueWithoutBreedInputObjectSchema } from './AnimalUpsertWithWhereUniqueWithoutBreedInput.schema';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithWhereUniqueWithoutBreedInputObjectSchema } from './AnimalUpdateWithWhereUniqueWithoutBreedInput.schema';
import { AnimalUpdateManyWithWhereWithoutBreedInputObjectSchema } from './AnimalUpdateManyWithWhereWithoutBreedInput.schema';
import { AnimalScalarWhereInputObjectSchema } from './AnimalScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUpdateManyWithoutBreedNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => AnimalCreateWithoutBreedInputObjectSchema),
            z.lazy(() => AnimalCreateWithoutBreedInputObjectSchema).array(),
            z.lazy(() => AnimalUncheckedCreateWithoutBreedInputObjectSchema),
            z
              .lazy(() => AnimalUncheckedCreateWithoutBreedInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => AnimalCreateOrConnectWithoutBreedInputObjectSchema),
            z
              .lazy(() => AnimalCreateOrConnectWithoutBreedInputObjectSchema)
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
              () => AnimalUpsertWithWhereUniqueWithoutBreedInputObjectSchema,
            ),
            z
              .lazy(
                () => AnimalUpsertWithWhereUniqueWithoutBreedInputObjectSchema,
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
            z.lazy(() => AnimalWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => AnimalWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => AnimalWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => AnimalWhereUniqueInputObjectSchema),
            z.lazy(() => AnimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => AnimalUpdateWithWhereUniqueWithoutBreedInputObjectSchema,
            ),
            z
              .lazy(
                () => AnimalUpdateWithWhereUniqueWithoutBreedInputObjectSchema,
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
              () => AnimalUpdateManyWithWhereWithoutBreedInputObjectSchema,
            ),
            z
              .lazy(
                () => AnimalUpdateManyWithWhereWithoutBreedInputObjectSchema,
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
            z.lazy(() => AnimalScalarWhereInputObjectSchema),
            z.lazy(() => AnimalScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const AnimalUpdateManyWithoutBreedNestedInputObjectSchema = Schema;
