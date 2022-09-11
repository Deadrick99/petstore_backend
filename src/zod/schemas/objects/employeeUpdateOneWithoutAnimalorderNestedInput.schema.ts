import { z } from 'zod';
import { employeeCreateWithoutAnimalorderInputObjectSchema } from './employeeCreateWithoutAnimalorderInput.schema';
import { employeeUncheckedCreateWithoutAnimalorderInputObjectSchema } from './employeeUncheckedCreateWithoutAnimalorderInput.schema';
import { employeeCreateOrConnectWithoutAnimalorderInputObjectSchema } from './employeeCreateOrConnectWithoutAnimalorderInput.schema';
import { employeeUpsertWithoutAnimalorderInputObjectSchema } from './employeeUpsertWithoutAnimalorderInput.schema';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';
import { employeeUpdateWithoutAnimalorderInputObjectSchema } from './employeeUpdateWithoutAnimalorderInput.schema';
import { employeeUncheckedUpdateWithoutAnimalorderInputObjectSchema } from './employeeUncheckedUpdateWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeUpdateOneWithoutAnimalorderNestedInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => employeeCreateWithoutAnimalorderInputObjectSchema),
            z.lazy(
              () => employeeUncheckedCreateWithoutAnimalorderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => employeeCreateOrConnectWithoutAnimalorderInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        upsert: z
          .lazy(() => employeeUpsertWithoutAnimalorderInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => employeeWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => employeeUpdateWithoutAnimalorderInputObjectSchema),
            z.lazy(
              () => employeeUncheckedUpdateWithoutAnimalorderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const employeeUpdateOneWithoutAnimalorderNestedInputObjectSchema =
  Schema;
