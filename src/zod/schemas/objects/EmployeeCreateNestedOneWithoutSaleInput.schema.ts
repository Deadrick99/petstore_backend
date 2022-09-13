import { z } from 'zod';
import { EmployeeCreateWithoutSaleInputObjectSchema } from './EmployeeCreateWithoutSaleInput.schema';
import { EmployeeUncheckedCreateWithoutSaleInputObjectSchema } from './EmployeeUncheckedCreateWithoutSaleInput.schema';
import { EmployeeCreateOrConnectWithoutSaleInputObjectSchema } from './EmployeeCreateOrConnectWithoutSaleInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateNestedOneWithoutSaleInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => EmployeeCreateWithoutSaleInputObjectSchema),
            z.lazy(() => EmployeeUncheckedCreateWithoutSaleInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => EmployeeCreateOrConnectWithoutSaleInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const EmployeeCreateNestedOneWithoutSaleInputObjectSchema = Schema;
