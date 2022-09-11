import { z } from 'zod';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';
import { employeeUpdateWithoutCityInputObjectSchema } from './employeeUpdateWithoutCityInput.schema';
import { employeeUncheckedUpdateWithoutCityInputObjectSchema } from './employeeUncheckedUpdateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeUpdateWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => employeeWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => employeeUpdateWithoutCityInputObjectSchema),
        z.lazy(() => employeeUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const employeeUpdateWithWhereUniqueWithoutCityInputObjectSchema = Schema;
