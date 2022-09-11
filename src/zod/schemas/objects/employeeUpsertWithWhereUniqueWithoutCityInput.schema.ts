import { z } from 'zod';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';
import { employeeUpdateWithoutCityInputObjectSchema } from './employeeUpdateWithoutCityInput.schema';
import { employeeUncheckedUpdateWithoutCityInputObjectSchema } from './employeeUncheckedUpdateWithoutCityInput.schema';
import { employeeCreateWithoutCityInputObjectSchema } from './employeeCreateWithoutCityInput.schema';
import { employeeUncheckedCreateWithoutCityInputObjectSchema } from './employeeUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeUpsertWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => employeeWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => employeeUpdateWithoutCityInputObjectSchema),
        z.lazy(() => employeeUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => employeeCreateWithoutCityInputObjectSchema),
        z.lazy(() => employeeUncheckedCreateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const employeeUpsertWithWhereUniqueWithoutCityInputObjectSchema = Schema;
