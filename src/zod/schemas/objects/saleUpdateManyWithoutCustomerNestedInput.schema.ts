import { z } from 'zod';
import { saleCreateWithoutCustomerInputObjectSchema } from './saleCreateWithoutCustomerInput.schema';
import { saleUncheckedCreateWithoutCustomerInputObjectSchema } from './saleUncheckedCreateWithoutCustomerInput.schema';
import { saleCreateOrConnectWithoutCustomerInputObjectSchema } from './saleCreateOrConnectWithoutCustomerInput.schema';
import { saleUpsertWithWhereUniqueWithoutCustomerInputObjectSchema } from './saleUpsertWithWhereUniqueWithoutCustomerInput.schema';
import { saleWhereUniqueInputObjectSchema } from './saleWhereUniqueInput.schema';
import { saleUpdateWithWhereUniqueWithoutCustomerInputObjectSchema } from './saleUpdateWithWhereUniqueWithoutCustomerInput.schema';
import { saleUpdateManyWithWhereWithoutCustomerInputObjectSchema } from './saleUpdateManyWithWhereWithoutCustomerInput.schema';
import { saleScalarWhereInputObjectSchema } from './saleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleUpdateManyWithoutCustomerNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => saleCreateWithoutCustomerInputObjectSchema),
            z.lazy(() => saleCreateWithoutCustomerInputObjectSchema).array(),
            z.lazy(() => saleUncheckedCreateWithoutCustomerInputObjectSchema),
            z
              .lazy(() => saleUncheckedCreateWithoutCustomerInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => saleCreateOrConnectWithoutCustomerInputObjectSchema),
            z
              .lazy(() => saleCreateOrConnectWithoutCustomerInputObjectSchema)
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
              () => saleUpsertWithWhereUniqueWithoutCustomerInputObjectSchema,
            ),
            z
              .lazy(
                () => saleUpsertWithWhereUniqueWithoutCustomerInputObjectSchema,
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
            z.lazy(() => saleWhereUniqueInputObjectSchema),
            z.lazy(() => saleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => saleWhereUniqueInputObjectSchema),
            z.lazy(() => saleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => saleWhereUniqueInputObjectSchema),
            z.lazy(() => saleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => saleWhereUniqueInputObjectSchema),
            z.lazy(() => saleWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => saleUpdateWithWhereUniqueWithoutCustomerInputObjectSchema,
            ),
            z
              .lazy(
                () => saleUpdateWithWhereUniqueWithoutCustomerInputObjectSchema,
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
              () => saleUpdateManyWithWhereWithoutCustomerInputObjectSchema,
            ),
            z
              .lazy(
                () => saleUpdateManyWithWhereWithoutCustomerInputObjectSchema,
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
            z.lazy(() => saleScalarWhereInputObjectSchema),
            z.lazy(() => saleScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const saleUpdateManyWithoutCustomerNestedInputObjectSchema = Schema;
