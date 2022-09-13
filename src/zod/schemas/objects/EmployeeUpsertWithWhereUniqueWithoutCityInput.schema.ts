import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithoutCityInputObjectSchema } from './EmployeeUpdateWithoutCityInput.schema';
import { EmployeeUncheckedUpdateWithoutCityInputObjectSchema } from './EmployeeUncheckedUpdateWithoutCityInput.schema';
import { EmployeeCreateWithoutCityInputObjectSchema } from './EmployeeCreateWithoutCityInput.schema';
import { EmployeeUncheckedCreateWithoutCityInputObjectSchema } from './EmployeeUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpsertWithWhereUniqueWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EmployeeUpdateWithoutCityInputObjectSchema),
        z.lazy(() => EmployeeUncheckedUpdateWithoutCityInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EmployeeCreateWithoutCityInputObjectSchema),
        z.lazy(() => EmployeeUncheckedCreateWithoutCityInputObjectSchema),
      ]),
    })
    .strict();

export const EmployeeUpsertWithWhereUniqueWithoutCityInputObjectSchema = Schema;
