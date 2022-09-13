import { z } from 'zod';
import { SaleAnimalCreateWithoutAnimalInputObjectSchema } from './SaleAnimalCreateWithoutAnimalInput.schema';
import { SaleAnimalUncheckedCreateWithoutAnimalInputObjectSchema } from './SaleAnimalUncheckedCreateWithoutAnimalInput.schema';
import { SaleAnimalCreateOrConnectWithoutAnimalInputObjectSchema } from './SaleAnimalCreateOrConnectWithoutAnimalInput.schema';
import { SaleAnimalUpsertWithWhereUniqueWithoutAnimalInputObjectSchema } from './SaleAnimalUpsertWithWhereUniqueWithoutAnimalInput.schema';
import { SaleAnimalWhereUniqueInputObjectSchema } from './SaleAnimalWhereUniqueInput.schema';
import { SaleAnimalUpdateWithWhereUniqueWithoutAnimalInputObjectSchema } from './SaleAnimalUpdateWithWhereUniqueWithoutAnimalInput.schema';
import { SaleAnimalUpdateManyWithWhereWithoutAnimalInputObjectSchema } from './SaleAnimalUpdateManyWithWhereWithoutAnimalInput.schema';
import { SaleAnimalScalarWhereInputObjectSchema } from './SaleAnimalScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalUncheckedUpdateManyWithoutAnimalNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleAnimalCreateWithoutAnimalInputObjectSchema),
            z
              .lazy(() => SaleAnimalCreateWithoutAnimalInputObjectSchema)
              .array(),
            z.lazy(
              () => SaleAnimalUncheckedCreateWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleAnimalUncheckedCreateWithoutAnimalInputObjectSchema,
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
              () => SaleAnimalCreateOrConnectWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleAnimalCreateOrConnectWithoutAnimalInputObjectSchema,
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
                SaleAnimalUpsertWithWhereUniqueWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  SaleAnimalUpsertWithWhereUniqueWithoutAnimalInputObjectSchema,
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
            z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema),
            z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema),
            z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema),
            z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema),
            z.lazy(() => SaleAnimalWhereUniqueInputObjectSchema).array(),
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
                SaleAnimalUpdateWithWhereUniqueWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  SaleAnimalUpdateWithWhereUniqueWithoutAnimalInputObjectSchema,
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
              () => SaleAnimalUpdateManyWithWhereWithoutAnimalInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  SaleAnimalUpdateManyWithWhereWithoutAnimalInputObjectSchema,
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
            z.lazy(() => SaleAnimalScalarWhereInputObjectSchema),
            z.lazy(() => SaleAnimalScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SaleAnimalUncheckedUpdateManyWithoutAnimalNestedInputObjectSchema =
  Schema;
