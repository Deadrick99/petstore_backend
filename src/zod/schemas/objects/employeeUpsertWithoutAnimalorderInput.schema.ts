import { z } from 'zod';
import { employeeUpdateWithoutAnimalorderInputObjectSchema } from './employeeUpdateWithoutAnimalorderInput.schema';
import { employeeUncheckedUpdateWithoutAnimalorderInputObjectSchema } from './employeeUncheckedUpdateWithoutAnimalorderInput.schema';
import { employeeCreateWithoutAnimalorderInputObjectSchema } from './employeeCreateWithoutAnimalorderInput.schema';
import { employeeUncheckedCreateWithoutAnimalorderInputObjectSchema } from './employeeUncheckedCreateWithoutAnimalorderInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeUpsertWithoutAnimalorderInput> = z
  .object({
    update: z.union([
      z.lazy(() => employeeUpdateWithoutAnimalorderInputObjectSchema),
      z.lazy(() => employeeUncheckedUpdateWithoutAnimalorderInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => employeeCreateWithoutAnimalorderInputObjectSchema),
      z.lazy(() => employeeUncheckedCreateWithoutAnimalorderInputObjectSchema),
    ]),
  })
  .strict();

export const employeeUpsertWithoutAnimalorderInputObjectSchema = Schema;
