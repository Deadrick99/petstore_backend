import { z } from 'zod';
import { merchandiseorderUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema } from './merchandiseorderUncheckedCreateNestedManyWithoutEmployeeInput.schema';
import { saleUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema } from './saleUncheckedCreateNestedManyWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeUncheckedCreateWithoutAnimalorderInput> =
  z
    .object({
      EMPLOYEEID: z.number(),
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
      merchandiseorder: z
        .lazy(
          () =>
            merchandiseorderUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema,
        )
        .optional(),
      sale: z
        .lazy(
          () => saleUncheckedCreateNestedManyWithoutEmployeeInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const employeeUncheckedCreateWithoutAnimalorderInputObjectSchema =
  Schema;
