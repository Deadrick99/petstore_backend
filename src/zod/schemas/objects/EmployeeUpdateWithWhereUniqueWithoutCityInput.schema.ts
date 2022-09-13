import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithoutCityInputObjectSchema } from './EmployeeUpdateWithoutCityInput.schema';
import { EmployeeUncheckedUpdateWithoutCityInputObjectSchema } from './EmployeeUncheckedUpdateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EmployeeUpdateWithoutCityInputObjectSchema),
        z.lazy(() => EmployeeUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const EmployeeUpdateWithWhereUniqueWithoutCityInputObjectSchema = Schema;
