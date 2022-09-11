import { z } from 'zod';
import { customerCreateWithoutCityInputObjectSchema } from './customerCreateWithoutCityInput.schema';
import { customerUncheckedCreateWithoutCityInputObjectSchema } from './customerUncheckedCreateWithoutCityInput.schema';
import { customerCreateOrConnectWithoutCityInputObjectSchema } from './customerCreateOrConnectWithoutCityInput.schema';
import { customerWhereUniqueInputObjectSchema } from './customerWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.customerUncheckedCreateNestedManyWithoutCityInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => customerCreateWithoutCityInputObjectSchema),
            z.lazy(() => customerCreateWithoutCityInputObjectSchema).array(),
            z.lazy(() => customerUncheckedCreateWithoutCityInputObjectSchema),
            z
              .lazy(() => customerUncheckedCreateWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => customerCreateOrConnectWithoutCityInputObjectSchema),
            z
              .lazy(() => customerCreateOrConnectWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => customerWhereUniqueInputObjectSchema),
            z.lazy(() => customerWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const customerUncheckedCreateNestedManyWithoutCityInputObjectSchema =
  Schema;
