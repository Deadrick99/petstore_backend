import { z } from 'zod';
import { supplierCreateWithoutCityInputObjectSchema } from './supplierCreateWithoutCityInput.schema';
import { supplierUncheckedCreateWithoutCityInputObjectSchema } from './supplierUncheckedCreateWithoutCityInput.schema';
import { supplierCreateOrConnectWithoutCityInputObjectSchema } from './supplierCreateOrConnectWithoutCityInput.schema';
import { supplierWhereUniqueInputObjectSchema } from './supplierWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.supplierUncheckedCreateNestedManyWithoutCityInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => supplierCreateWithoutCityInputObjectSchema),
            z.lazy(() => supplierCreateWithoutCityInputObjectSchema).array(),
            z.lazy(() => supplierUncheckedCreateWithoutCityInputObjectSchema),
            z
              .lazy(() => supplierUncheckedCreateWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => supplierCreateOrConnectWithoutCityInputObjectSchema),
            z
              .lazy(() => supplierCreateOrConnectWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => supplierWhereUniqueInputObjectSchema),
            z.lazy(() => supplierWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const supplierUncheckedCreateNestedManyWithoutCityInputObjectSchema =
  Schema;
