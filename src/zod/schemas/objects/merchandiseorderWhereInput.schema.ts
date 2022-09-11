import { z } from 'zod';
import { DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { DateTimeNullableFilterObjectSchema } from './DateTimeNullableFilter.schema';
import { DecimalNullableFilterObjectSchema } from './DecimalNullableFilter.schema';
import { SupplierRelationFilterObjectSchema } from './SupplierRelationFilter.schema';
import { supplierWhereInputObjectSchema } from './supplierWhereInput.schema';
import { EmployeeRelationFilterObjectSchema } from './EmployeeRelationFilter.schema';
import { employeeWhereInputObjectSchema } from './employeeWhereInput.schema';
import { OrderitemListRelationFilterObjectSchema } from './OrderitemListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.merchandiseorderWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => merchandiseorderWhereInputObjectSchema),
        z.lazy(() => merchandiseorderWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => merchandiseorderWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => merchandiseorderWhereInputObjectSchema),
        z.lazy(() => merchandiseorderWhereInputObjectSchema).array(),
      ])
      .optional(),
    PONUMBER: z
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
    EMPLOYEEID: z
      .union([z.lazy(() => DecimalNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    SHIPPINGCOST: z
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
    orderitem: z.lazy(() => OrderitemListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const merchandiseorderWhereInputObjectSchema = Schema;
