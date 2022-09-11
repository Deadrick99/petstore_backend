import { z } from 'zod';
import { employeeUpdateWithoutSaleInputObjectSchema } from './employeeUpdateWithoutSaleInput.schema';
import { employeeUncheckedUpdateWithoutSaleInputObjectSchema } from './employeeUncheckedUpdateWithoutSaleInput.schema';
import { employeeCreateWithoutSaleInputObjectSchema } from './employeeCreateWithoutSaleInput.schema';
import { employeeUncheckedCreateWithoutSaleInputObjectSchema } from './employeeUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeUpsertWithoutSaleInput> = z
  .object({
    update: z.union([
      z.lazy(() => employeeUpdateWithoutSaleInputObjectSchema),
      z.lazy(() => employeeUncheckedUpdateWithoutSaleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => employeeCreateWithoutSaleInputObjectSchema),
      z.lazy(() => employeeUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const employeeUpsertWithoutSaleInputObjectSchema = Schema;
