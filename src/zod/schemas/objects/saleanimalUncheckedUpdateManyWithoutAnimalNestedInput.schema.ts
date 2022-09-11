import { z } from 'zod';
import { saleanimalCreateWithoutAnimalInputObjectSchema } from './saleanimalCreateWithoutAnimalInput.schema';
import { saleanimalUncheckedCreateWithoutAnimalInputObjectSchema } from './saleanimalUncheckedCreateWithoutAnimalInput.schema';
import { saleanimalCreateOrConnectWithoutAnimalInputObjectSchema } from './saleanimalCreateOrConnectWithoutAnimalInput.schema';
import { saleanimalUpsertWithWhereUniqueWithoutAnimalInputObjectSchema } from './saleanimalUpsertWithWhereUniqueWithoutAnimalInput.schema';
import { saleanimalWhereUniqueInputObjectSchema } from './saleanimalWhereUniqueInput.schema';
import { saleanimalUpdateWithWhereUniqueWithoutAnimalInputObjectSchema } from './saleanimalUpdateWithWhereUniqueWithoutAnimalInput.schema';
import { saleanimalUpdateManyWithWhereWithoutAnimalInputObjectSchema } from './saleanimalUpdateManyWithWhereWithoutAnimalInput.schema';
import { saleanimalScalarWhereInputObjectSchema } from './saleanimalScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleanimalUncheckedUpdateManyWithoutAnimalNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleanimalCreateWithoutAnimalInputObjectSchema),
            z
              .lazy(() => saleanimalCreateWithoutAnimalInputObjectSchema)
              .array(),
            z.lazy(
              () => saleanimalUncheckedCreateWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () => saleanimalUncheckedCreateWithoutAnimalInputObjectSchema,
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
              () => saleanimalCreateOrConnectWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () => saleanimalCreateOrConnectWithoutAnimalInputObjectSchema,
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
                saleanimalUpsertWithWhereUniqueWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  saleanimalUpsertWithWhereUniqueWithoutAnimalInputObjectSchema,
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
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema),
            z.lazy(() => saleanimalWhereUniqueInputObjectSchema).array(),
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
                saleanimalUpdateWithWhereUniqueWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  saleanimalUpdateWithWhereUniqueWithoutAnimalInputObjectSchema,
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
              () => saleanimalUpdateManyWithWhereWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  saleanimalUpdateManyWithWhereWithoutAnimalInputObjectSchema,
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
            z.lazy(() => saleanimalScalarWhereInputObjectSchema),
            z.lazy(() => saleanimalScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const saleanimalUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema =
  Schema;
