import { z } from 'zod';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';
import { employeeCreateWithoutAnimalorderInputObjectSchema } from './employeeCreateWithoutAnimalorderInput.schema';
import { employeeUncheckedCreateWithoutAnimalorderInputObjectSchema } from './employeeUncheckedCreateWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeCreateOrConnectWithoutAnimalorderInput> =
  z
    .object({
      where: z.lazy(() => employeeWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => employeeCreateWithoutAnimalorderInputObjectSchema),
        z.lazy(
          () => employeeUncheckedCreateWithoutAnimalorderInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const employeeCreateOrConnectWithoutAnimalorderInputObjectSchema =
  Schema;
