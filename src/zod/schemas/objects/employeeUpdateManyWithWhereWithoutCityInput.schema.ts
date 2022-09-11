import { z } from 'zod';
import { employeeScalarWhereInputObjectSchema } from './employeeScalarWhereInput.schema';
import { employeeUpdateManyMutationInputObjectSchema } from './employeeUpdateManyMutationInput.schema';
import { employeeUncheckedUpdateManyWithoutEmployeeInputObjectSchema } from './employeeUncheckedUpdateManyWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeUpdateManyWithWhereWithoutCityInput> = z
  .object({
    where: z.lazy(() => employeeScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => employeeUpdateManyMutationInputObjectSchema),
      z.lazy(() => employeeUncheckedUpdateManyWithoutEmployeeInputObjectSchema),
    ]),
  })
  .strict();

export const employeeUpdateManyWithWhereWithoutCityInputObjectSchema = Schema;
