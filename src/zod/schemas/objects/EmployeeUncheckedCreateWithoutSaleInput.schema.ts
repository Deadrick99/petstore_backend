import { z } from 'zod';
import { AnimalOrderUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema } from './AnimalOrderUncheckedCreateNestedManyWithoutEmployeeInput.schema';
import { MerchandiseOrderUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema } from './MerchandiseOrderUncheckedCreateNestedManyWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeUncheckedCreateWithoutSaleInput> = z
  .object({
    EMPLOYEEID: z.number().optional(),
    LASTNAME: z.string().optional().nullable(),
    FIRSTNAME: z.string().optional().nullable(),
    PHONE: z.string().optional().nullable(),
    ADDRESS: z.string().optional().nullable(),
    ZIPCODE: z.string().optional().nullable(),
    CITYID: z.number().optional().nullable(),
    TAXPAYERID: z.string().optional().nullable(),
    DATEHIRED: z.date().optional().nullable(),
    DATERELEASED: z.date().optional().nullable(),
    MANAGERID: z.number().optional().nullable(),
    EMPLOYEELEVEL: z.number().optional().nullable(),
    TITLE: z.string().optional().nullable(),
    AnimalOrder: z
      .lazy(
        () =>
          AnimalOrderUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema,
      )
      .optional(),
    MerchandiseOrder: z
      .lazy(
        () =>
          MerchandiseOrderUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const EmployeeUncheckedCreateWithoutSaleInputObjectSchema = Schema;
