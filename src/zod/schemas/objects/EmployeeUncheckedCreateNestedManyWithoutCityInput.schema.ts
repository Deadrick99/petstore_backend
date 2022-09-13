import { z } from 'zod';
import { EmployeeCreateWithoutCityInputObjectSchema } from './EmployeeCreateWithoutCityInput.schema';
import { EmployeeUncheckedCreateWithoutCityInputObjectSchema } from './EmployeeUncheckedCreateWithoutCityInput.schema';
import { EmployeeCreateOrConnectWithoutCityInputObjectSchema } from './EmployeeCreateOrConnectWithoutCityInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUncheckedCreateNestedManyWithoutCityInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => EmployeeCreateWithoutCityInputObjectSchema),
            z.lazy(() => EmployeeCreateWithoutCityInputObjectSchema).array(),
            z.lazy(() => EmployeeUncheckedCreateWithoutCityInputObjectSchema),
            z
              .lazy(() => EmployeeUncheckedCreateWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .union([
            z.lazy(() => EmployeeCreateOrConnectWithoutCityInputObjectSchema),
            z
              .lazy(() => EmployeeCreateOrConnectWithoutCityInputObjectSchema)
              .array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z
          .union([
            z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
            z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const EmployeeUncheckedCreateNestedManyWithoutCityInputObjectSchema =
  Schema;
