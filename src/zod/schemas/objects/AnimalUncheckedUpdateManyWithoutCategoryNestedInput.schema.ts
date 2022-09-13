import { z } from 'zod';
import { AnimalCreateWithoutCategoryInputObjectSchema } from './AnimalCreateWithoutCategoryInput.schema';
import { AnimalUncheckedCreateWithoutCategoryInputObjectSchema } from './AnimalUncheckedCreateWithoutCategoryInput.schema';
import { AnimalCreateOrConnectWithoutCategoryInputObjectSchema } from './AnimalCreateOrConnectWithoutCategoryInput.schema';
import { AnimalUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './AnimalUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { AnimalWhereUniqueInputObjectSchema } from './AnimalWhereUniqueInput.schema';
import { AnimalUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './AnimalUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { AnimalUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './AnimalUpdateManyWithWhereWithoutCategoryInput.schema';
import { AnimalScalarWhereInputObjectSchema } from './AnimalScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.AnimalUncheckedUpdateManyWithoutCategoryNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => AnimalCreateWithoutCategoryInputObjectSchema),
            z.lazy(() => AnimalCreateWithoutCategoryInputObjectSchema).array(),
            z.lazy(() => AnimalUncheckedCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => AnimalUncheckedCreateWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => AnimalCreateOrConnectWithoutCategoryInputObjectSchema),
            z
              .lazy(() => AnimalCreateOrConnectWithoutCategoryInputObjectSchema)
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
              () => AnimalUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
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
              () => AnimalUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  AnimalUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
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
              () => AnimalUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () => AnimalUpdateManyWithWhereWithoutCategoryInputObjectSchema,
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

export const AnimalUncheckedUpdateManyWithoutCategoryNestedInputObjectSchema =
  Schema;
