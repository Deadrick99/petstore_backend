import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeCreateWithoutSaleInputObjectSchema } from './EmployeeCreateWithoutSaleInput.schema';
import { EmployeeUncheckedCreateWithoutSaleInputObjectSchema } from './EmployeeUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateOrConnectWithoutSaleInput> = z
  .object({
    where: z.lazy(() => EmployeeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EmployeeCreateWithoutSaleInputObjectSchema),
      z.lazy(() => EmployeeUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const EmployeeCreateOrConnectWithoutSaleInputObjectSchema = Schema;
