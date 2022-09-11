import { z } from 'zod';
import { employeeCreateWithoutCityInputObjectSchema } from './employeeCreateWithoutCityInput.schema';
import { employeeUncheckedCreateWithoutCityInputObjectSchema } from './employeeUncheckedCreateWithoutCityInput.schema';
import { employeeCreateOrConnectWithoutCityInputObjectSchema } from './employeeCreateOrConnectWithoutCityInput.schema';
import { employeeUpsertWithWhereUniqueWithoutCityInputObjectSchema } from './employeeUpsertWithWhereUniqueWithoutCityInput.schema';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';
import { employeeUpdateWithWhereUniqueWithoutCityInputObjectSchema } from './employeeUpdateWithWhereUniqueWithoutCityInput.schema';
import { employeeUpdateManyWithWhereWithoutCityInputObjectSchema } from './employeeUpdateManyWithWhereWithoutCityInput.schema';
import { employeeScalarWhereInputObjectSchema } from './employeeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeUpdateManyWithoutCityNestedInput> =
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
        upsert: z
          .union([
            z.lazy(
              () => employeeUpsertWithWhereUniqueWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => employeeUpsertWithWhereUniqueWithoutCityInputObjectSchema,
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
            z.lazy(() => employeeWhereUniqueInputObjectSchema),
            z.lazy(() => employeeWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z
          .union([
            z.lazy(() => employeeWhereUniqueInputObjectSchema),
            z.lazy(() => employeeWhereUniqueInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        delete: z
          .union([
            z.lazy(() => employeeWhereUniqueInputObjectSchema),
            z.lazy(() => employeeWhereUniqueInputObjectSchema).array(),
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
    z
      .object({
        update: z
          .union([
            z.lazy(
              () => employeeUpdateWithWhereUniqueWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => employeeUpdateWithWhereUniqueWithoutCityInputObjectSchema,
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
              () => employeeUpdateManyWithWhereWithoutCityInputObjectSchema,
            ),
            z
              .lazy(
                () => employeeUpdateManyWithWhereWithoutCityInputObjectSchema,
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
            z.lazy(() => employeeScalarWhereInputObjectSchema),
            z.lazy(() => employeeScalarWhereInputObjectSchema).array(),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const employeeUpdateManyWithoutCityNestedInputObjectSchema = Schema;
