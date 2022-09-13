import { z } from 'zod';
import { CustomerCreateWithoutCityInputObjectSchema } from './CustomerCreateWithoutCityInput.schema';
import { CustomerUncheckedCreateWithoutCityInputObjectSchema } from './CustomerUncheckedCreateWithoutCityInput.schema';
import { CustomerCreateOrConnectWithoutCityInputObjectSchema } from './CustomerCreateOrConnectWithoutCityInput.schema';
import { CustomerWhereUniqueInputObjectSchema } from './CustomerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CustomerUncheckedCreateNestedManyWithoutCityInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => CustomerCreateWithoutCityInputObjectSchema),
            z.lazy(() => CustomerCreateWithoutCityInputObjectSchema).array(),
            z.lazy(() => CustomerUncheckedCreateWithoutCityInputObjectSchema),
            z
              .lazy(() => CustomerUncheckedCreateWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => CustomerCreateOrConnectWithoutCityInputObjectSchema),
            z
              .lazy(() => CustomerCreateOrConnectWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => CustomerWhereUniqueInputObjectSchema),
            z.lazy(() => CustomerWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const CustomerUncheckedCreateNestedManyWithoutCityInputObjectSchema =
  Schema;
