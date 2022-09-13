import { z } from 'zod';
import { EmployeeUpdateWithoutSaleInputObjectSchema } from './EmployeeUpdateWithoutSaleInput.schema';
import { EmployeeUncheckedUpdateWithoutSaleInputObjectSchema } from './EmployeeUncheckedUpdateWithoutSaleInput.schema';
import { EmployeeCreateWithoutSaleInputObjectSchema } from './EmployeeCreateWithoutSaleInput.schema';
import { EmployeeUncheckedCreateWithoutSaleInputObjectSchema } from './EmployeeUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpsertWithoutSaleInput> = z
  .object({
    update: z.union([
      z.lazy(() => EmployeeUpdateWithoutSaleInputObjectSchema),
      z.lazy(() => EmployeeUncheckedUpdateWithoutSaleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => EmployeeCreateWithoutSaleInputObjectSchema),
      z.lazy(() => EmployeeUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const EmployeeUpsertWithoutSaleInputObjectSchema = Schema;
