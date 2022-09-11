import { z } from 'zod';
import { animalCreateWithoutCategoryInputObjectSchema } from './animalCreateWithoutCategoryInput.schema';
import { animalUncheckedCreateWithoutCategoryInputObjectSchema } from './animalUncheckedCreateWithoutCategoryInput.schema';
import { animalCreateOrConnectWithoutCategoryInputObjectSchema } from './animalCreateOrConnectWithoutCategoryInput.schema';
import { animalUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './animalUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { animalWhereUniqueInputObjectSchema } from './animalWhereUniqueInput.schema';
import { animalUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './animalUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { animalUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './animalUpdateManyWithWhereWithoutCategoryInput.schema';
import { animalScalarWhereInputObjectSchema } from './animalScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalUpdateManyWithoutCategoryNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => animalCreateWithoutCategoryInputObjectSchema),
            z.lazy(() => animalCreateWithoutCategoryInputObjectSchema).array(),
            z.lazy(() => animalUncheckedCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => animalUncheckedCreateWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => animalCreateOrConnectWithoutCategoryInputObjectSchema),
            z
              .lazy(() => animalCreateOrConnectWithoutCategoryInputObjectSchema)
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
              () => animalUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
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
              () => animalUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  animalUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
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
              () => animalUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () => animalUpdateManyWithWhereWithoutCategoryInputObjectSchema,
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

export const animalUpdateManyWithoutCategoryNestedInputObjectSchema = Schema;
