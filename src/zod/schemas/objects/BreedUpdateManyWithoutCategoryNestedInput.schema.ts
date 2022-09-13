import { z } from 'zod';
import { BreedCreateWithoutCategoryInputObjectSchema } from './BreedCreateWithoutCategoryInput.schema';
import { BreedUncheckedCreateWithoutCategoryInputObjectSchema } from './BreedUncheckedCreateWithoutCategoryInput.schema';
import { BreedCreateOrConnectWithoutCategoryInputObjectSchema } from './BreedCreateOrConnectWithoutCategoryInput.schema';
import { BreedUpsertWithWhereUniqueWithoutCategoryInputObjectSchema } from './BreedUpsertWithWhereUniqueWithoutCategoryInput.schema';
import { BreedWhereUniqueInputObjectSchema } from './BreedWhereUniqueInput.schema';
import { BreedUpdateWithWhereUniqueWithoutCategoryInputObjectSchema } from './BreedUpdateWithWhereUniqueWithoutCategoryInput.schema';
import { BreedUpdateManyWithWhereWithoutCategoryInputObjectSchema } from './BreedUpdateManyWithWhereWithoutCategoryInput.schema';
import { BreedScalarWhereInputObjectSchema } from './BreedScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BreedUpdateManyWithoutCategoryNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => BreedCreateWithoutCategoryInputObjectSchema),
            z.lazy(() => BreedCreateWithoutCategoryInputObjectSchema).array(),
            z.lazy(() => BreedUncheckedCreateWithoutCategoryInputObjectSchema),
            z
              .lazy(() => BreedUncheckedCreateWithoutCategoryInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => BreedCreateOrConnectWithoutCategoryInputObjectSchema),
            z
              .lazy(() => BreedCreateOrConnectWithoutCategoryInputObjectSchema)
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
              () => BreedUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  BreedUpsertWithWhereUniqueWithoutCategoryInputObjectSchema,
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
            z.lazy(() => BreedWhereUniqueInputObjectSchema),
            z.lazy(() => BreedWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => BreedWhereUniqueInputObjectSchema),
            z.lazy(() => BreedWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => BreedWhereUniqueInputObjectSchema),
            z.lazy(() => BreedWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => BreedWhereUniqueInputObjectSchema),
            z.lazy(() => BreedWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => BreedUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  BreedUpdateWithWhereUniqueWithoutCategoryInputObjectSchema,
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
              () => BreedUpdateManyWithWhereWithoutCategoryInputObjectSchema,
            ),
            z
              .lazy(
                () => BreedUpdateManyWithWhereWithoutCategoryInputObjectSchema,
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
            z.lazy(() => BreedScalarWhereInputObjectSchema),
            z.lazy(() => BreedScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const BreedUpdateManyWithoutCategoryNestedInputObjectSchema = Schema;
