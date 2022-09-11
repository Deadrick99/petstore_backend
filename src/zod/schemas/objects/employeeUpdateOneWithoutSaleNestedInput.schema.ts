import { z } from 'zod';
import { employeeCreateWithoutSaleInputObjectSchema } from './employeeCreateWithoutSaleInput.schema';
import { employeeUncheckedCreateWithoutSaleInputObjectSchema } from './employeeUncheckedCreateWithoutSaleInput.schema';
import { employeeCreateOrConnectWithoutSaleInputObjectSchema } from './employeeCreateOrConnectWithoutSaleInput.schema';
import { employeeUpsertWithoutSaleInputObjectSchema } from './employeeUpsertWithoutSaleInput.schema';
import { employeeWhereUniqueInputObjectSchema } from './employeeWhereUniqueInput.schema';
import { employeeUpdateWithoutSaleInputObjectSchema } from './employeeUpdateWithoutSaleInput.schema';
import { employeeUncheckedUpdateWithoutSaleInputObjectSchema } from './employeeUncheckedUpdateWithoutSaleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeUpdateOneWithoutSaleNestedInput> =
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
        upsert: z
          .lazy(() => employeeUpsertWithoutSaleInputObjectSchema)
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
        connect: z.lazy(() => employeeWhereUniqueInputObjectSchema).optional(),
      })
      .strict(),
    z
      .object({
        update: z
          .union([
            z.lazy(() => employeeUpdateWithoutSaleInputObjectSchema),
            z.lazy(() => employeeUncheckedUpdateWithoutSaleInputObjectSchema),
          ])
          .optional(),
      })
      .strict(),
  ]);

export const employeeUpdateOneWithoutSaleNestedInputObjectSchema = Schema;
