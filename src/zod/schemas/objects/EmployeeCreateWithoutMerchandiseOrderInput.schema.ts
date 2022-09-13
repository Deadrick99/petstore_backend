import { z } from 'zod';
import { CityCreateNestedOneWithoutEmployeeInputObjectSchema } from './CityCreateNestedOneWithoutEmployeeInput.schema';
import { AnimalOrderCreateNestedManyWithoutEmployeeInputObjectSchema } from './AnimalOrderCreateNestedManyWithoutEmployeeInput.schema';
import { SaleCreateNestedManyWithoutEmployeeInputObjectSchema } from './SaleCreateNestedManyWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateWithoutMerchandiseOrderInput> = z
  .object({
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
    City: z
      .lazy(() => CityCreateNestedOneWithoutEmployeeInputObjectSchema)
      .optional(),
    AnimalOrder: z
      .lazy(() => AnimalOrderCreateNestedManyWithoutEmployeeInputObjectSchema)
      .optional(),
    Sale: z
      .lazy(() => SaleCreateNestedManyWithoutEmployeeInputObjectSchema)
      .optional(),
  })
  .strict();

export const EmployeeCreateWithoutMerchandiseOrderInputObjectSchema = Schema;
