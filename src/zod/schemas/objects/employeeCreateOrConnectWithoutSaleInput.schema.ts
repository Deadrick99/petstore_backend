import { z } from 'zod';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';
import { employeeCreateWithoutSaleInputObjectSchema } from './employeeCreateWithoutSaleInput.schema';
import { employeeUncheckedCreateWithoutSaleInputObjectSchema } from './employeeUncheckedCreateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeCreateOrConnectWithoutSaleInput> = z
  .object({
    where: z.lazy(() => employeeWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => employeeCreateWithoutSaleInputObjectSchema),
      z.lazy(() => employeeUncheckedCreateWithoutSaleInputObjectSchema),
    ]),
  })
  .strict();

export const employeeCreateOrConnectWithoutSaleInputObjectSchema = Schema;
