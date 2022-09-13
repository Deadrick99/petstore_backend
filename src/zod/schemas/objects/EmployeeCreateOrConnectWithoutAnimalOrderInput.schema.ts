import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeCreateWithoutAnimalOrderInputObjectSchema } from './EmployeeCreateWithoutAnimalOrderInput.schema';
import { EmployeeUncheckedCreateWithoutAnimalOrderInputObjectSchema } from './EmployeeUncheckedCreateWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateOrConnectWithoutAnimalOrderInput> =
  z
    .object({
      where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EmployeeCreateWithoutAnimalOrderInputObjectSchema),
        z.lazy(
          () => EmployeeUncheckedCreateWithoutAnimalOrderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EmployeeCreateOrConnectWithoutAnimalOrderInputObjectSchema =
  Schema;
