import { z } from 'zod';
import { AnimalOrderCreateNestedManyWithoutEmployeeInputObjectSchema } from './AnimalOrderCreateNestedManyWithoutEmployeeInput.schema';
import { MerchandiseOrderCreateNestedManyWithoutEmployeeInputObjectSchema } from './MerchandiseOrderCreateNestedManyWithoutEmployeeInput.schema';
import { SaleCreateNestedManyWithoutEmployeeInputObjectSchema } from './SaleCreateNestedManyWithoutEmployeeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EmployeeCreateWithoutCityInput> = z
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
    AnimalOrder: z
      .lazy(() => AnimalOrderCreateNestedManyWithoutEmployeeInputObjectSchema)
      .optional(),
    MerchandiseOrder: z
      .lazy(
        () => MerchandiseOrderCreateNestedManyWithoutEmployeeInputObjectSchema,
      )
      .optional(),
    Sale: z
      .lazy(() => SaleCreateNestedManyWithoutEmployeeInputObjectSchema)
      .optional(),
  })
  .strict();

export const EmployeeCreateWithoutCityInputObjectSchema = Schema;
