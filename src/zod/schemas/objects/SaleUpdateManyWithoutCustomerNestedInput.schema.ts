import { z } from 'zod';
import { SaleCreateWithoutCustomerInputObjectSchema } from './SaleCreateWithoutCustomerInput.schema';
import { SaleUncheckedCreateWithoutCustomerInputObjectSchema } from './SaleUncheckedCreateWithoutCustomerInput.schema';
import { SaleCreateOrConnectWithoutCustomerInputObjectSchema } from './SaleCreateOrConnectWithoutCustomerInput.schema';
import { SaleUpsertWithWhereUniqueWithoutCustomerInputObjectSchema } from './SaleUpsertWithWhereUniqueWithoutCustomerInput.schema';
import { SaleWhereUniqueInputObjectSchema } from './SaleWhereUniqueInput.schema';
import { SaleUpdateWithWhereUniqueWithoutCustomerInputObjectSchema } from './SaleUpdateWithWhereUniqueWithoutCustomerInput.schema';
import { SaleUpdateManyWithWhereWithoutCustomerInputObjectSchema } from './SaleUpdateManyWithWhereWithoutCustomerInput.schema';
import { SaleScalarWhereInputObjectSchema } from './SaleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SaleUpdateManyWithoutCustomerNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => SaleCreateWithoutCustomerInputObjectSchema),
            z.lazy(() => SaleCreateWithoutCustomerInputObjectSchema).array(),
            z.lazy(() => SaleUncheckedCreateWithoutCustomerInputObjectSchema),
            z
              .lazy(() => SaleUncheckedCreateWithoutCustomerInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => SaleCreateOrConnectWithoutCustomerInputObjectSchema),
            z
              .lazy(() => SaleCreateOrConnectWithoutCustomerInputObjectSchema)
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
              () => SaleUpsertWithWhereUniqueWithoutCustomerInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleUpsertWithWhereUniqueWithoutCustomerInputObjectSchema,
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
            z.lazy(() => SaleWhereUniqueInputObjectSchema),
            z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => SaleWhereUniqueInputObjectSchema),
            z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => SaleWhereUniqueInputObjectSchema),
            z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => SaleWhereUniqueInputObjectSchema),
            z.lazy(() => SaleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => SaleUpdateWithWhereUniqueWithoutCustomerInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleUpdateWithWhereUniqueWithoutCustomerInputObjectSchema,
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
              () => SaleUpdateManyWithWhereWithoutCustomerInputObjectSchema,
            ),
            z
              .lazy(
                () => SaleUpdateManyWithWhereWithoutCustomerInputObjectSchema,
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
            z.lazy(() => SaleScalarWhereInputObjectSchema),
            z.lazy(() => SaleScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const SaleUpdateManyWithoutCustomerNestedInputObjectSchema = Schema;
