import { z } from 'zod';
import { EmployeeScalarWhereInputObjectSchema } from './EmployeeScalarWhereInput.schema';
import { EmployeeUpdateManyMutationInputObjectSchema } from './EmployeeUpdateManyMutationInput.schema';
import { EmployeeUncheckedUpdateManyWithoutEmployeeInputObjectSchema } from './EmployeeUncheckedUpdateManyWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateManyWithWhereWithoutCityInput> = z
  .object({
    where: z.lazy(() => EmployeeScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => EmployeeUpdateManyMutationInputObjectSchema),
      z.lazy(() => EmployeeUncheckedUpdateManyWithoutEmployeeInputObjectSchema),
    ]),
  })
  .strict();

export const EmployeeUpdateManyWithWhereWithoutCityInputObjectSchema = Schema;
