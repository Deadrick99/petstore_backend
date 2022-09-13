import { z } from 'zod';
import { EmployeeCreateWithoutAnimalOrderInputObjectSchema } from './EmployeeCreateWithoutAnimalOrderInput.schema';
import { EmployeeUncheckedCreateWithoutAnimalOrderInputObjectSchema } from './EmployeeUncheckedCreateWithoutAnimalOrderInput.schema';
import { EmployeeCreateOrConnectWithoutAnimalOrderInputObjectSchema } from './EmployeeCreateOrConnectWithoutAnimalOrderInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateNestedOneWithoutAnimalOrderInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => EmployeeCreateWithoutAnimalOrderInputObjectSchema),
            z.lazy(
              () => EmployeeUncheckedCreateWithoutAnimalOrderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(
            () => EmployeeCreateOrConnectWithoutAnimalOrderInputObjectSchema,
          )
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const EmployeeCreateNestedOneWithoutAnimalOrderInputObjectSchema =
  Schema;
