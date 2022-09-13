import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeCreateWithoutCityInputObjectSchema } from './EmployeeCreateWithoutCityInput.schema';
import { EmployeeUncheckedCreateWithoutCityInputObjectSchema } from './EmployeeUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateOrConnectWithoutCityInput> = z
  .object({
    where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EmployeeCreateWithoutCityInputObjectSchema),
      z.lazy(() => EmployeeUncheckedCreateWithoutCityInputObjectSchema),
    ]),
  })
  .strict();

export const EmployeeCreateOrConnectWithoutCityInputObjectSchema = Schema;
