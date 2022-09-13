import { z } from 'zod';
import { EmployeeCreateWithoutSaleInputObjectSchema } from './EmployeeCreateWithoutSaleInput.schema';
import { EmployeeUncheckedCreateWithoutSaleInputObjectSchema } from './EmployeeUncheckedCreateWithoutSaleInput.schema';
import { EmployeeCreateOrConnectWithoutSaleInputObjectSchema } from './EmployeeCreateOrConnectWithoutSaleInput.schema';
import { EmployeeUpsertWithoutSaleInputObjectSchema } from './EmployeeUpsertWithoutSaleInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './EmployeeWhereUniqueInput.schema';
import { EmployeeUpdateWithoutSaleInputObjectSchema } from './EmployeeUpdateWithoutSaleInput.schema';
import { EmployeeUncheckedUpdateWithoutSaleInputObjectSchema } from './EmployeeUncheckedUpdateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUpdateOneWithoutSaleNestedInput> =
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
        upsert: z
          .lazy(() => EmployeeUpsertWithoutSaleInputObjectSchema)
          .optional(),
      })
      .strict(),
    z
      .object({
        disconnect: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        delete: z.boolean().optional(),
      })
      .strict(),
    z
      .object({
        connect: z.lazy(() => EmployeeWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => EmployeeUpdateWithoutSaleInputObjectSchema),
            z.lazy(() => EmployeeUncheckedUpdateWithoutSaleInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const EmployeeUpdateOneWithoutSaleNestedInputObjectSchema = Schema;
