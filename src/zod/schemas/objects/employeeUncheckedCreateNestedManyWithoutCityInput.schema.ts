import { z } from 'zod';
import { employeeCreateWithoutCityInputObjectSchema } from './employeeCreateWithoutCityInput.schema';
import { employeeUncheckedCreateWithoutCityInputObjectSchema } from './employeeUncheckedCreateWithoutCityInput.schema';
import { employeeCreateOrConnectWithoutCityInputObjectSchema } from './employeeCreateOrConnectWithoutCityInput.schema';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeUncheckedCreateNestedManyWithoutCityInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => employeeCreateWithoutCityInputObjectSchema),
            z.lazy(() => employeeCreateWithoutCityInputObjectSchema).array(),
            z.lazy(() => employeeUncheckedCreateWithoutCityInputObjectSchema),
            z
              .lazy(() => employeeUncheckedCreateWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => employeeCreateOrConnectWithoutCityInputObjectSchema),
            z
              .lazy(() => employeeCreateOrConnectWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => employeeWhereUniqueInputObjectSchema),
            z.lazy(() => employeeWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const employeeUncheckedCreateNestedManyWithoutCityInputObjectSchema =
  Schema;
