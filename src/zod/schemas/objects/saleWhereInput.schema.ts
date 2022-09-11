import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { EmployeeRelationFilterObjectSchema } from './EmployeeRelationFilter.schema';
import { employeeWhereInputObjectSchema } from './employeeWhereInput.schema';
import { CustomerRelationFilterObjectSchema } from './CustomerRelationFilter.schema';
import { customerWhereInputObjectSchema } from './customerWhereInput.schema';
import { SaleanimalListRelationFilterObjectSchema } from './SaleanimalListRelationFilter.schema';
import { SaleitemListRelationFilterObjectSchema } from './SaleitemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.saleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => saleWhereInputObjectSchema),
        z.lazy(() => saleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => saleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => saleWhereInputObjectSchema),
        z.lazy(() => saleWhereInputObjectSchema).array(),
      ])
      .optional(),
    SALEID: z
      .union([z.lazy(() => DecimalFilterObjectSchema), z.number()])
      .optional(),
    SALEDATE: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.date()])
      .optional()
      .nullable(),
    EMPLOYEEID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    CUSTOMERID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    SALESTAX: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    employee: z
      .union([
        z.lazy(() => EmployeeRelationFilterObjectSchema),
        z.lazy(() => employeeWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    customer: z
      .union([
        z.lazy(() => CustomerRelationFilterObjectSchema),
        z.lazy(() => customerWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
    saleanimal: z
      .lazy(() => SaleanimalListRelationFilterObjectSchema)
      .optional(),
    saleitem: z.lazy(() => SaleitemListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const saleWhereInputObjectSchema = Schema;
