import { z } from 'zod';
import { EmployeeCreateWithoutCityInputObjectSchema } from './EmployeeCreateWithoutCityInput.schema';
import { EmployeeUncheckedCreateWithoutCityInputObjectSchema } from './EmployeeUncheckedCreateWithoutCityInput.schema';
import { EmployeeCreateOrConnectWithoutCityInputObjectSchema } from './EmployeeCreateOrConnectWithoutCityInput.schema';
import { EmployeeUpsertWithWhereUniqueWithoutCityInputObjectSchema } from './EmployeeUpsertWithWhereUniqueWithoutCityInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithWhereUniqueWithoutCityInputObjectSchema } from './EmployeeUpdateWithWhereUniqueWithoutCityInput.schema';
import { EmployeeUpdateManyWithWhereWithoutCityInputObjectSchema } from './EmployeeUpdateManyWithWhereWithoutCityInput.schema';
import { EmployeeScalarWhereInputObjectSchema } from './EmployeeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateManyWithoutCityNestedInput> =
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
        upsert: z
          .union([
            z.lazy(
              () => EmployeeUpsertWithWhereUniqueWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => EmployeeUpsertWithWhereUniqueWithoutCityInputObjectSchema,
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
            z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
            z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
            z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
            z.lazy(() => EmployeeWhereUniqueInputObjectSchema).array(),
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
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => EmployeeUpdateWithWhereUniqueWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => EmployeeUpdateWithWhereUniqueWithoutCityInputObjectSchema,
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
              () => EmployeeUpdateManyWithWhereWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => EmployeeUpdateManyWithWhereWithoutCityInputObjectSchema,
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
            z.lazy(() => EmployeeScalarWhereInputObjectSchema),
            z.lazy(() => EmployeeScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const EmployeeUpdateManyWithoutCityNestedInputObjectSchema = Schema;
