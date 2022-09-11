import { z } from 'zod';
import { cityCreateNestedOneWithoutEmployeeInputObjectSchema } from './cityCreateNestedOneWithoutEmployeeInput.schema';
import { animalorderCreateNestedManyWithoutEmployeeInputObjectSchema } from './animalorderCreateNestedManyWithoutEmployeeInput.schema';
import { merchandiseorderCreateNestedManyWithoutEmployeeInputObjectSchema } from './merchandiseorderCreateNestedManyWithoutEmployeeInput.schema';
import { saleCreateNestedManyWithoutEmployeeInputObjectSchema } from './saleCreateNestedManyWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.employeeCreateInput> = z
  .object({
    EMPLOYEEID: z.number(),
    LASTNAME: z.string().optional().nullable(),
    FIRSTNAME: z.string().optional().nullable(),
    PHONE: z.string().optional().nullable(),
    ADDRESS: z.string().optional().nullable(),
    ZIPCODE: z.string().optional().nullable(),
    TAXPAYERID: z.string().optional().nullable(),
    DATEHIRED: z.date().optional().nullable(),
    DATERELEASED: z.date().optional().nullable(),
    MANAGERID: z.number().optional().nullable(),
    EMPLOYEELEVEL: z.number().optional().nullable(),
    TITLE: z.string().optional().nullable(),
    city: z
      .lazy(() => cityCreateNestedOneWithoutEmployeeInputObjectSchema)
      .optional(),
    animalorder: z
      .lazy(() => animalorderCreateNestedManyWithoutEmployeeInputObjectSchema)
      .optional(),
    merchandiseorder: z
      .lazy(
        () => merchandiseorderCreateNestedManyWithoutEmployeeInputObjectSchema,
      )
      .optional(),
    sale: z
      .lazy(() => saleCreateNestedManyWithoutEmployeeInputObjectSchema)
      .optional(),
  })
  .strict();

export const employeeCreateInputObjectSchema = Schema;
