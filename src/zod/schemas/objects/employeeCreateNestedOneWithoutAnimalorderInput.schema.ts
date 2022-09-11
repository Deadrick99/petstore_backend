import { z } from 'zod';
import { employeeCreateWithoutAnimalorderInputObjectSchema } from './employeeCreateWithoutAnimalorderInput.schema';
import { employeeUncheckedCreateWithoutAnimalorderInputObjectSchema } from './employeeUncheckedCreateWithoutAnimalorderInput.schema';
import { employeeCreateOrConnectWithoutAnimalorderInputObjectSchema } from './employeeCreateOrConnectWithoutAnimalorderInput.schema';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeCreateNestedOneWithoutAnimalorderInput> =
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
        connect: z.lazy(() => employeeWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const employeeCreateNestedOneWithoutAnimalorderInputObjectSchema =
  Schema;
