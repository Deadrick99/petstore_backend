import { z } from 'zod';
import { EmployeeCreateWithoutAnimalOrderInputObjectSchema } from './EmployeeCreateWithoutAnimalOrderInput.schema';
import { EmployeeUncheckedCreateWithoutAnimalOrderInputObjectSchema } from './EmployeeUncheckedCreateWithoutAnimalOrderInput.schema';
import { EmployeeCreateOrConnectWithoutAnimalOrderInputObjectSchema } from './EmployeeCreateOrConnectWithoutAnimalOrderInput.schema';
import { EmployeeUpsertWithoutAnimalOrderInputObjectSchema } from './EmployeeUpsertWithoutAnimalOrderInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithoutAnimalOrderInputObjectSchema } from './EmployeeUpdateWithoutAnimalOrderInput.schema';
import { EmployeeUncheckedUpdateWithoutAnimalOrderInputObjectSchema } from './EmployeeUncheckedUpdateWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateOneWithoutAnimalOrderNestedInput> =
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
        upsert: z
          .lazy(() => EmployeeUpsertWithoutAnimalOrderInputObjectSchema)
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
        connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => EmployeeUpdateWithoutAnimalOrderInputObjectSchema),
            z.lazy(
              () => EmployeeUncheckedUpdateWithoutAnimalOrderInputObjectSchema,
            ),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const EmployeeUpdateOneWithoutAnimalOrderNestedInputObjectSchema =
  Schema;
