import { z } from 'zod';
import { employeeCreateWithoutSaleInputObjectSchema } from './employeeCreateWithoutSaleInput.schema';
import { employeeUncheckedCreateWithoutSaleInputObjectSchema } from './employeeUncheckedCreateWithoutSaleInput.schema';
import { employeeCreateOrConnectWithoutSaleInputObjectSchema } from './employeeCreateOrConnectWithoutSaleInput.schema';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeCreateNestedOneWithoutSaleInput> =
  z.union([
    z
      .object({
        create: z
          .union([
            z.lazy(() => employeeCreateWithoutSaleInputObjectSchema),
            z.lazy(() => employeeUncheckedCreateWithoutSaleInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
    z
      .object({
        connectOrCreate: z
          .lazy(() => employeeCreateOrConnectWithoutSaleInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => employeeWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
  ]);

export const employeeCreateNestedOneWithoutSaleInputObjectSchema = Schema;
