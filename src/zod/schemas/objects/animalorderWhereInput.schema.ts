import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { SupplierRelationFilterObjectSchema } from './SupplierRelationFilter.schema';
import { supplierWhereInputObjectSchema } from './supplierWhereInput.schema';
import { EmployeeRelationFilterObjectSchema } from './EmployeeRelationFilter.schema';
import { employeeWhereInputObjectSchema } from './employeeWhereInput.schema';
import { AnimalorderitemListRelationFilterObjectSchema } from './AnimalorderitemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.animalorderWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => animalorderWhereInputObjectSchema),
        z.lazy(() => animalorderWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => animalorderWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => animalorderWhereInputObjectSchema),
        z.lazy(() => animalorderWhereInputObjectSchema).array(),
      ])
      .optional(),
    ORDERID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    ORDERDATE: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    RECEIVEDATE: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    SUPPLIERID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    SHIPPINGCOST: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    EMPLOYEEID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    supplier: z
      .union([
        z.lazy(() => SupplierRelationFilterObjectSchema),
        z.lazy(() => supplierWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    employee: z
      .union([
        z.lazy(() => EmployeeRelationFilterObjectSchema),
        z.lazy(() => employeeWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    animalorderitem: z
      .lazy(() => AnimalorderitemListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const animalorderWhereInputObjectSchema = Schema;
