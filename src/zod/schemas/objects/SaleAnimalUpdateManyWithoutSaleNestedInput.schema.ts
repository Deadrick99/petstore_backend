import { z } from 'zod';
import { SaleAnimalCreateWithoutSaleInputObjectSchema } from './SaleAnimalCreateWithoutSaleInput.schema';
import { SaleAnimalUncheckedCreateWithoutSaleInputObjectSchema } from './SaleAnimalUncheckedCreateWithoutSaleInput.schema';
import { SaleAnimalCreateOrConnectWithoutSaleInputObjectSchema } from './SaleAnimalCreateOrConnectWithoutSaleInput.schema';
import { SaleAnimalUpsertWithWhereUniqueWithoutSaleInputObjectSchema } from './SaleAnimalUpsertWithWhereUniqueWithoutSaleInput.schema';
import { SaleAnimalWhereUniqueInputObjectSchema } from './SaleAnimalWhereUniqueInput.schema';
import { SaleAnimalUpdateWithWhereUniqueWithoutSaleInputObjectSchema } from './SaleAnimalUpdateWithWhereUniqueWithoutSaleInput.schema';
import { SaleAnimalUpdateManyWithWhereWithoutSaleInputObjectSchema } from './SaleAnimalUpdateManyWithWhereWithoutSaleInput.schema';
import { SaleAnimalScalarWhereInputObjectSchema } from './SaleAnimalScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleAnimalUpdateManyWithoutSaleNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleAnimalCreateWithoutSaleInputObjectSchema),
            z.lazy(() => SaleAnimalCreateWithoutSaleInputObjectSchema).array(),
            z.lazy(() => SaleAnimalUncheckedCreateWithoutSaleInputObjectSchema),
            z
              .lazy(() => SaleAnimalUncheckedCreateWithoutSaleInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => SaleAnimalCreateOrConnectWithoutSaleInputObjectSchema),
            z
              .lazy(() => SaleAnimalCreateOrConnectWithoutSaleInputObjectSchema)
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
              () => SaleAnimalUpsertWithWhereUniqueWithoutSaleInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  SaleAnimalUpsertWithWhereUniqueWithoutSaleInputObjectSchema,
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
              () => SaleAnimalUpdateWithWhereUniqueWithoutSaleInputObjectSchema,
            ),
            z
              .lazy(
                () =>
                  SaleAnimalUpdateWithWhereUniqueWithoutSaleInputObjectSchema,
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
              () => SaleAnimalUpdateManyWithWhereWithoutSaleInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleAnimalUpdateManyWithWhereWithoutSaleInputObjectSchema,
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

export const SaleAnimalUpdateManyWithoutSaleNestedInputObjectSchema = Schema;
