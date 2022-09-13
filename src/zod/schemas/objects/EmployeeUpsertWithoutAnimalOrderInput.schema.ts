import { z } from 'zod';
import { EmployeeUpdateWithoutAnimalOrderInputObjectSchema } from './EmployeeUpdateWithoutAnimalOrderInput.schema';
import { EmployeeUncheckedUpdateWithoutAnimalOrderInputObjectSchema } from './EmployeeUncheckedUpdateWithoutAnimalOrderInput.schema';
import { EmployeeCreateWithoutAnimalOrderInputObjectSchema } from './EmployeeCreateWithoutAnimalOrderInput.schema';
import { EmployeeUncheckedCreateWithoutAnimalOrderInputObjectSchema } from './EmployeeUncheckedCreateWithoutAnimalOrderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpsertWithoutAnimalOrderInput> = z
  .object({
    update: z.union([
      z.lazy(() => EmployeeUpdateWithoutAnimalOrderInputObjectSchema),
      z.lazy(() => EmployeeUncheckedUpdateWithoutAnimalOrderInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EmployeeCreateWithoutAnimalOrderInputObjectSchema),
      z.lazy(() => EmployeeUncheckedCreateWithoutAnimalOrderInputObjectSchema),
    ]),
  })
  .strict();

export const EmployeeUpsertWithoutAnimalOrderInputObjectSchema = Schema;
