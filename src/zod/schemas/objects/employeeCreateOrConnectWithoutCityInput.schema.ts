import { z } from 'zod';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';
import { employeeCreateWithoutCityInputObjectSchema } from './employeeCreateWithoutCityInput.schema';
import { employeeUncheckedCreateWithoutCityInputObjectSchema } from './employeeUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeCreateOrConnectWithoutCityInput> = z
  .object({
    where: z.lazy(() => employeeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => employeeCreateWithoutCityInputObjectSchema),
      z.lazy(() => employeeUncheckedCreateWithoutCityInputObjectSchema),
    ]),
  })
  .strict();

export const employeeCreateOrConnectWithoutCityInputObjectSchema = Schema;
